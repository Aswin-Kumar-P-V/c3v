"use server";

import { sendMail } from "../lib/mail/sendMail";
import { ContactUsEmail } from "../templates/ContactTemplate";

type ContactPayload = {
    name: string;
    email: string;
    project: string;
    message: string;
};

export async function contactAction(data: ContactPayload) {
    try {
        console.log("CONTACT FORM DATA:", data);

        // DB save / email logic here
        await sendMail<ContactPayload>({
            to: "c3v.solutions@gmail.com",
            subject: `New Contact from ${data.name}`,
            template: (p: ContactPayload) => ContactUsEmail(p),
            props: data,
        });


        return {
            success: true,
            message: "Message sent successfully",
        };
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Something went wrong",
        };
    }
}