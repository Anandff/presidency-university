// @ts-nocheck
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const body = await req.json();

    const {
      name,
      student_id,
      email,
      password,
      phone,
      department,
      program,
      year,
      semester,
      section
    } = body;

    if (
      !name ||
      !student_id ||
      !email ||
      !password ||
      !program
    ) {
      return new Response(
        JSON.stringify({
          error: "Name, student ID, email, password and program are required."
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(
        JSON.stringify({
          error: "Server configuration is missing."
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const adminClient = createClient(
      supabaseUrl,
      serviceRoleKey
    );

    // Create Supabase Auth account
    const {
      data: authData,
      error: authError
    } = await adminClient.auth.admin.createUser({
      email: email.toLowerCase().trim(),
      password,
      email_confirm: true
    });

    if (authError) {
      return new Response(
        JSON.stringify({
          error: authError.message
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // Create student database record
    const {
      data: student,
      error: studentError
    } = await adminClient
      .from("students")
      .insert({
        student_id,
        name,
        email: email.toUpperCase().trim(),
        phone: phone || null,
        department: department || null,
        program,
        year: year || 1,
        semester: semester || 1,
        section: section || null,
        auth_user_id: authData.user.id
      })
      .select()
      .single();

    if (studentError) {
      // Remove Auth account if student record creation fails
      await adminClient.auth.admin.deleteUser(
        authData.user.id
      );

      return new Response(
        JSON.stringify({
          error: studentError.message
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Student created successfully.",
        student
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Unexpected server error."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
});