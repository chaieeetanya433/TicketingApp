import TicketForm from "@/app/(components)/TicketForm";
import { TicketDocument } from "@/app/(models)/Tickets";

const getTicketById = async (id: string) => {

    const res = await fetch(`https://ticketing-app-seven.vercel.app/api/Tickets/${id}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to get ticket.");
    }

    return res.json();
}

const TicketPage = async ({ params }: any) => {
    const EDITMODE = params.id === "new" ? false : true;

    let updateTicketData: TicketDocument | {} = {};

    if (EDITMODE) {
        updateTicketData = await getTicketById(params.id);
        updateTicketData = updateTicketData;
    } else {
        updateTicketData = {
            _id: "new"
        }
    }
    return (
        <TicketForm ticket={updateTicketData as TicketDocument}/>
    );
}

export default TicketPage;
