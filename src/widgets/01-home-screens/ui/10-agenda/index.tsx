import css from "./agenda.module.scss";

const agendaItems = [
    { time: "09:30 – 10:00", label: "Registration & Check-in" },
    {
        time: "10:30 – 10:40",
        label: "Opening speech",
        title: "Superpowers of Based Preconfirmations",
    },
    {
        time: "10:40 – 10:55",
        label: "Gattaca Keynote",
        title: "The institutional case for based rollups",
    },
    {
        time: "10:55 – 11:30",
        label: "Panel",
        title: "The Race to Real-Time: How to Ensure ZK Proofs Keep Up",
    },
    { time: "11:30 – 11:45", label: "Keynote", title: "SSV" },
    {
        time: "11:45 – 12:20",
        label: "Panel",
        title: "The Case For Preconfirmations: Devs, Traders and Users",
    },
    { time: "12:20 – 13:10", label: "Lunch" },
    {
        time: "13:10 – 13:25",
        label: "Keynote Tomas Stanczak",
        title: "Scaling Ethereum for Apps and Users",
    },
    {
        time: "13:25 – 14:00",
        label: "Panel",
        title: "Back to Basics: What Simplicity Means for Ethereum",
    },
    {
        time: "14:00 – 14:15",
        label: "EthGas Keynote",
        title: "Blockspace Markets and the Future of Gas",
    },
    {
        time: "14:15 – 14:50",
        label: "Panel",
        title: "Local or Global – Building for Different Markets",
    },
    {
        time: "14:50 – 15:05",
        label: "| Keynote Taiko Gwyneth",
        title: "Gwyneth: Generalised Synchronous Composability",
    },
    {
        time: "15:05 – 15:40",
        label: "Panel",
        title: "What Role Should Ethereum Play in Its Own Scaling Stack?",
    },
    { time: "15:40 – 15:45", label: "Closing speech" },
    { time: "16:00 – 18:00", label: "Networking" },
];

export const Agenda: React.FC = () => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Agenda</h2>
            <div className={css.agendaList}>
                {agendaItems.map((item, index) => (
                    <div key={index}>
                        <div className={css.agendaItem}>
                            <span className={css.itemTime}>{item.time}</span>
                            <span className={css.itemLabel}>{item.label}</span>
                        </div>
                        {item.title && <div className={css.itemTitle}>{item.title}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};
