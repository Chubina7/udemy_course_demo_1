"use client";

import { useFormStatus } from "react-dom";

import React from "react";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submiting..." : "Share Meal"}
    </button>
  );
}
