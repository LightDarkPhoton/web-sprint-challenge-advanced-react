import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);
    const formHeading = screen.getByText("Checkout Form")
    expect(formHeading.textContent).toBe("Checkout Form")
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText("First Name:")
    const lastNameInput = screen.getByLabelText("Last Name:")
    const addressInput = screen.getByLabelText("Address:")
    const cityInput = screen.getByLabelText("City:")
    const stateInput = screen.getByLabelText("State:")
    const zipInput = screen.getByLabelText("Zip:")

    fireEvent.change(firstNameInput, {target: {value: "Bob"} })
    fireEvent.change(lastNameInput, {target: {value: "Smith"} })
    fireEvent.change(addressInput, {target: {value: "123 Apple Way"}})
    fireEvent.change(cityInput, {target: {value: "New York"} })
    fireEvent.change(stateInput, {target: {value: "CA"} })
    fireEvent.change(zipInput, {target: {value: "92545" }})

    const submitButton = screen.getByText("Checkout")
    fireEvent.click(submitButton)

    const successMessage = screen.getByTestId("successMessage")
    console.log(successMessage.textContent)
    expect(successMessage.textContent).toBe("You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:Bob Smith123 Apple WayNew York, CA 92545")
});
