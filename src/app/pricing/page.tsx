"use client"

import React from 'react';
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";

const pricingPlans = [
  {
    name: "Basic",
    price: "15",
    priceId: "price_1QEC7RGSVvx5bt6jB3BPdBz4",
    features: [
      "Custom for starters",
      "100 AI-generated posts per month",
      "Twitter thread generation",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "47",
    priceId: "price_1QEC8mGSVvx5bt6jb4oa5vby",
    features: [
      "500 AI-generated posts per month",
      "Twitter, Instagram, and LinkedIn content",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceId: null,
    features: [
      "Unlimited AI-generated posts",
      "All social media platforms",
      "Custom AI model training",
      "Dedicated account manager",
    ],
  },
];

function PricingPage() {
  const { isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (priceId: string) => {
    if (!isSignedIn) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          userId: user?.id,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { sessionId } = await response.json();
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      if (!stripe) {
        throw new Error("Failed to load Stripe");
      }
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-600 dark:text-white sm:text-5xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Simple, transparent pricing for your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-4 text-gray-400">
                  {plan.name === "Basic"
                    ? "Perfect for individuals and startups."
                    : plan.name === "Pro"
                    ? "Ideal for growing businesses."
                    : "Tailored for large-scale deployments."}
                </p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-xl font-medium text-gray-400">/mo</span>
                )}
              </div>
              <ul className="mb-8 space-y-4 text-gray-400">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => plan.priceId && handleSubscribe(plan.priceId)}
                disabled={isLoading || !plan.priceId}
                className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
              {isLoading ? "Processing..." : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
