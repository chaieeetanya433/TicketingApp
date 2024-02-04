import TicketCard from "./(components)/TickerCard";
import { TicketDocument } from "./(models)/Tickets";

const getTickets = async () => {
  try {
    const res = await fetch("https://ticketing-app-seven.vercel.app/api/Tickets", {
      cache: "no-store"
    });
    return res.json() as Promise<{ tickets: TicketDocument[] }>;;
  } catch (error) {
    console.log("Failed to get tickets", error);
    return { tickets: [] };
  }
}

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...Array.from(new Set(tickets?.map((ticket: TicketDocument) => ticket.category))),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {tickets
                .filter((ticket: TicketDocument) => ticket.category === uniqueCategory)
                .map((filteredTicket: TicketDocument, _index: number) => (
                  <TicketCard id={_index} key={_index} ticket={filteredTicket} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
