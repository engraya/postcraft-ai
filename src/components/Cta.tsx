import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowRightIcon,
} from "lucide-react";
export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient-to-r from-blue-400 to-indigo-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to Save Time & Maximize Engagement?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Get AI-Generated Content That Resonates
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
        <SignUpButton mode="modal">
              <button
                className="px-6 py-2 text-lg flex justify-center items-center font-medium text-center text-white bg-slate-600 rounded-md ">
                Start Your Free Trial Now! <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
        </SignUpButton>
        </div>
      </div>
    </Container>
  );
};
