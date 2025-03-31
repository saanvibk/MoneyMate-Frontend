import React, { useState } from "react";
import "./css/Learn.css"; // External CSS file for styling

const Learn = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="learn-container">
      <div className="learn-h2">
        <h1 className="learn-title">Learn Money Management</h1>
        <p className="learn-subtitle">
          Master the essentials of earning, saving, and investing money!
        </p>
      </div>
      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="section">
          <div className="section-header" onClick={() => toggleSection(index)}>
            <h2>{section.title}</h2>
            <span>{activeSection === index ? "▲" : "▼"}</span>
          </div>
          {activeSection === index && (
            <div className="section-content">
              {section.content.map((item, subIndex) => (
                <div key={subIndex} className="subsection">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Section Data
const sections = [
  {
    title: "🛒 Spending Wisely",
    content: [
      {
        title: "Spending Wisely",
        text: "Spending wisely means distinguishing between needs and wants. Think carefully before making a purchase, especially with limited funds. Creating a list of priorities helps avoid impulse buying and overspending. Learning to balance spending on fun things while saving for important goals develops lifelong money habits.",
      },
    ],
  },
  {
    title: "📊 Budgeting & Saving",
    content: [
      {
        title: "How to Create a Budget",
        text: "A budget is a simple plan for how you will spend your money each month. Start by listing your income and then note down your regular expenses, such as school supplies or entertainment. Use simple templates or interactive tools to track every expense. A well-planned budget can show you where your money goes and help you make better financial decisions.",
      },
      {
        title: "50/30/20 Rule",
        text: "The 50/30/20 rule is an easy guideline to manage your money. Allocate 50% of your income for essentials like food and housing, 30% for non-essentials like fun and hobbies, and 20% for savings and debt repayment. This rule helps you balance your spending and saving. It’s a straightforward method that can be adapted as your financial situation changes.",
      },
      {
        title: "Savings Goals",
        text: "Setting savings goals means planning for what you want to buy or achieve in the future. These goals can be short-term, like saving for a new gadget, or long-term, like a college fund. Having clear targets motivates you to save regularly and see progress over time. Tracking your goals makes saving a fun and rewarding habit.",
      },
      {
        title: "Emergency Fund Basics",
        text: "An emergency fund is money saved for unexpected events like a sudden expense or an urgent need. Even small, regular contributions add up over time to create a safety net. It teaches the importance of preparing for the unexpected rather than relying on quick fixes. Building an emergency fund early on can provide security and peace of mind.",
      },
    ],
  },
  {
    title: "📈 Investing Basics (Intro Level)",
    content: [
      {
        title: "What is Investing?",
        text: "Investing means using your money to purchase assets that can grow in value over time. Unlike saving, where you keep money aside, investing puts your money to work. It involves understanding risks and potential returns, making it a tool for long-term growth. For teens, basic investing is about learning how money can multiply over time with patience and smart decisions.",
      },
      {
        title: "Simple Investment Options",
        text: "There are various investment options suitable for beginners, such as stocks, mutual funds, and fixed deposits. Stocks allow you to own a small piece of a company, while mutual funds pool money from many investors. Fixed deposits are a safer way to earn a small interest on your savings. Exploring these options helps build knowledge on how to grow money with varying levels of risk.",
      },
      {
        title: "Power of Compound Interest",
        text: "Compound interest means earning interest on both your original money and the interest it has already earned. This effect makes your savings grow faster over time. Even small investments can lead to significant gains if given enough time. Understanding compound interest shows the importance of starting early and being consistent with your investments.",
      },
    ],
  },
  {
    title: "💼 Earning More Money",
    content: [
      {
        title: "Freelancing & Gigs for Teens",
        text: "Freelancing and gig work provide flexible opportunities to earn money online. Teens can offer skills like writing, graphic design, or tutoring on freelance platforms. It’s a way to gain real-world experience and build a portfolio while earning extra cash. Always research safe and age-appropriate platforms to ensure a positive experience.",
      },
      {
        title: "Selling & Entrepreneurship",
        text: "Selling items or starting a small business can be a great way to learn about entrepreneurship. Whether it’s crafting, reselling used items, or creating digital products, this activity teaches planning, marketing, and customer service. It also encourages creativity and problem-solving. Entrepreneurship for teens can be a hands-on lesson in how businesses operate and succeed.",
      },
      {
        title: "Internships & Part-time Jobs",
        text: "Internships and part-time jobs provide practical experience in a professional environment. These opportunities help teens learn important skills like teamwork, time management, and communication. They can explore different career paths and understand the work culture early on. Starting with a job, even in a small role, builds confidence and sets the stage for future success.",
      },
    ],
  },
];

export default Learn;
