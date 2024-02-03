import Ticket from "@/app/(models)/Tickets";
import { NextResponse } from "next/server";
import {ParsedUrlQuery} from "querystring"

export async function GET(req:any, {params}: {params: ParsedUrlQuery}) {
    try{
        const {id} = params;

        const foundTicket = await Ticket.findOne({_id: id});
    
        return NextResponse.json({foundTicket}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500});
    }
}

export async function DELETE(req:any, {params}: { params: ParsedUrlQuery }) {
    try{
        const {id} = params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket Deleted"}, {status: 200});
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500});
    }
}

export async function PUT(req:any, {params}: { params: ParsedUrlQuery }) {
    try{
        const {id} = params;
        const body = await req.json();
        const ticketData = body.formData

        const updateTicketData = await Ticket.findByIdAndUpdate(id, {
            ...ticketData,
        });

        console.log("PUT")

        return NextResponse.json({ message: "Ticket Updated"}, {status: 200});
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500});
    }
}