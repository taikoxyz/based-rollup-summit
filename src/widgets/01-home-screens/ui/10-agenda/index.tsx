import css from "./agenda.module.scss";

const agendaItems = [
    { time: "09:30 – 10:00", title: "Registration & Check-in" },
    { time: "10:30 – 10:40", title: "Opening speech" },
    { time: "10:40 – 10:55", title: "Gattaca Keynote" },
    {
        time: "10:55 – 11:30",
        title: "The Race to Real-Time: How to Ensure ZK Proofs Keep Up Panel",
    },
    {
        time: "11:30 – 12:05",
        title: "The Case For Preconfirmations: Devs, Traders and Users Panel",
    },
    { time: "12:05 – 12:20", title: "SSV Keynote" },
    { time: "12:20 – 13:10", title: "Lunch" },
    { time: "13:10 – 13:25", title: "Taiko Gwyneth Keynote" },
    { time: "13:25 – 14:00", title: "Back to Basics: What Simplicity Means for Ethereum Panel" },
    { time: "14:00 – 14:15", title: "EthGas Keynote" },
    { time: "14:15 – 14:50", title: "Local or Global - Building for Different Markets Panel" },
    { time: "14:50 – 15:05", title: "Tomasz K. Stanczak Keynote" },
    {
        time: "15:05 – 15:40",
        title: "What Role Should Ethereum Play in Its Own Scaling Stack? Panel",
    },
    { time: "15:40 – 15:45", title: "Closing speech" },
    { time: "16:00 – 18:00", title: "Networking" },
];

export const Agenda: React.FC = () => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Agenda</h2>
            <div className={css.agendaList}>
                {agendaItems.map((item, index) => (
                    <div key={index} className={css.agendaItem}>
                        <span className={css.itemTime}>{item.time}</span>
                        <span className={css.itemTitle}>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
