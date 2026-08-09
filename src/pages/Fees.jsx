import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Download,
  IndianRupee,
  Receipt,
  Wallet
} from "lucide-react";

const transactions = [
  {
    id: "TXN-2026-0812",
    title: "Semester Tuition Fee",
    date: "05 Aug 2026",
    amount: "₹62,500",
    status: "Paid",
    method: "UPI"
  },
  {
    id: "TXN-2026-0741",
    title: "Examination Fee",
    date: "28 Jul 2026",
    amount: "₹2,500",
    status: "Paid",
    method: "Net Banking"
  },
  {
    id: "TXN-2026-0698",
    title: "Library Fee",
    date: "18 Jul 2026",
    amount: "₹1,200",
    status: "Paid",
    method: "UPI"
  }
];

export default function Fees() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">FINANCE</span>
          <h1>Fees & Payments</h1>
          <p>
            View your fee structure, payment history and outstanding balance.
          </p>
        </div>

        <button className="semester-selector">
          <Wallet size={16} />
          Semester 1
        </button>
      </div>

      <div className="fees-overview">
        <div className="fee-balance-card">
          <div className="fee-balance-top">
            <div>
              <span className="panel-kicker">CURRENT BALANCE</span>
              <h2>₹0</h2>
              <p>No outstanding payment</p>
            </div>

            <div className="fee-wallet-icon">
              <Wallet size={19} />
            </div>
          </div>

          <div className="fee-balance-bottom">
            <span>
              <CheckCircle2 size={13} />
              All dues cleared
            </span>

            <button>
              View statement
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>

        <FeeStat
          icon={<IndianRupee />}
          label="Total paid"
          value="₹66,200"
          meta="Current semester"
        />

        <FeeStat
          icon={<Receipt />}
          label="Transactions"
          value="3"
          meta="Successful payments"
          green
        />

        <FeeStat
          icon={<CreditCard />}
          label="Next payment"
          value="₹0"
          meta="No payment due"
          orange
        />
      </div>

      <section className="fees-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">PAYMENT HISTORY</span>
            <h2>Recent transactions</h2>
          </div>

          <button className="text-button">
            <Download size={14} />
            Download statement
          </button>
        </div>

        <div className="fee-table-head">
          <span>TRANSACTION</span>
          <span>DATE</span>
          <span>AMOUNT</span>
          <span>METHOD</span>
          <span>STATUS</span>
          <span></span>
        </div>

        <div className="fee-table">
          {transactions.map((transaction) => (
            <div className="fee-table-row" key={transaction.id}>
              <div className="fee-transaction">
                <div className="fee-receipt-icon">
                  <Receipt size={15} />
                </div>

                <div>
                  <strong>{transaction.title}</strong>
                  <span>{transaction.id}</span>
                </div>
              </div>

              <div className="fee-date">
                {transaction.date}
              </div>

              <div className="fee-amount">
                {transaction.amount}
              </div>

              <div className="fee-method">
                {transaction.method}
              </div>

              <div>
                <span className="fee-paid">
                  <CheckCircle2 size={12} />
                  {transaction.status}
                </span>
              </div>

              <button className="fee-download">
                <Download size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="fee-payment-banner">
        <div className="fee-payment-icon">
          <CreditCard size={19} />
        </div>

        <div>
          <strong>Need to make a payment?</strong>
          <p>
            Pay your university fees securely through the student portal.
          </p>
        </div>

        <button>
          Make payment
          <ArrowUpRight size={14} />
        </button>
      </section>
    </div>
  );
}

function FeeStat({ icon, label, value, meta, green, orange }) {
  return (
    <div className="fee-stat-card">
      <div
        className={`fee-stat-icon ${
          green ? "green" : orange ? "orange" : ""
        }`}
      >
        {icon}
      </div>

      <span>{label}</span>
      <strong>{value}</strong>
      <small>{meta}</small>
    </div>
  );
}