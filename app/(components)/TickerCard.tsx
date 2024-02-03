import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import { TicketDocument } from "../(models)/Tickets";
import Link from "next/link";


interface TicketCardProps {
    ticket: TicketDocument;
    id: number;
}

const TicketCard = ({ticket, id}: TicketCardProps) => {

    const fomatTimestamp = (timestamp: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };

        // const date = new Date(JSON.stringify(timestamp.getTime()))
        const formattedDate = timestamp.toLocaleString("en-US", options);

        return formattedDate;
    }

    return (
        <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <PriorityDisplay priority={ticket.priority}/>
                <div className="ml-auto">
                    <DeleteBlock id={ticket._id}/>
                </div>
            </div>
            <Link href={`/TicketPage/${ticket._id}`} style={{display: "contents"}}>
            <h4>{ticket.title}</h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">{ticket.description}</p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1">{fomatTimestamp(ticket.createdAt)}</p>
                    <ProgressDisplay progress={ticket.progress}/>
                </div>
                <div className="ml-auto flex items-end">
                <StatusDisplay status={ticket.status}/>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default TicketCard;