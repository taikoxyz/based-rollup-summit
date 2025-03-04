import React, { useState } from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./speakers.module.scss";

interface ProfileCardProps {
    image: string;
    name: string;
    title: string;
    company: string;
}

interface Speaker {
    image: string;
    name: string;
    title: string;
    company: string;
}

const speakers: Speaker[] = [
    {
        image: "/img/speakers/vitalik.png",
        name: "Vitalik Buterin",
        title: "Co-founder",
        company: "Ethereum Foundation",
    },
    {
        image: "/img/speakers/dan-boneh.png",
        name: "Dan Boneh",
        title: "Co-director",
        company: "Stanford Blockchain Research",
    },
    {
        image: "/img/speakers/tomasz.png",
        name: "Tomasz Stanczak",
        title: "CEO",
        company: "Nethermind",
    },
    {
        image: "/img/speakers/keyao.png",
        name: "Keyao Shen",
        title: "Senior Lead Software Engineer",
        company: "Espresso Systems",
    },
    {
        image: "/img/speakers/alex.png",
        name: "Alex Skidanov",
        title: "Co-founder",
        company: "Near",
    },
    {
        image: "/img/speakers/uma.png",
        name: "Uma Roy",
        title: "Co-founder & CEO",
        company: "Succinct",
    },
    {
        image: "/img/speakers/harry.png",
        name: "Harry Gao",
        title: "Co-founder",
        company: "Luban",
    },
    {
        image: "/img/speakers/drew.png",
        name: "Drew Van Der Werff",
        title: "Shepherding Commit-",
        company: "Boost and Fabric",
    },
    {
        image: "/img/speakers/amir.png",
        name: "Amir Forouzani",
        title: "Co-founder & CEO",
        company: "Puffer Finance",
    },
    {
        image: "/img/speakers/cecilia.png",
        name: "Cecilia Zhang",
        title: "Engineer",
        company: "Taiko Gwyneth",
    },
    {
        image: "/img/speakers/jeff.png",
        name: "Jeff Walsh",
        title: "Engineer",
        company: "Taiko",
    },
    // New speakers added below
    {
        image: "/img/speakers/brecht.png",
        name: "Brecht Devos",
        title: "Co-founder and CTO",
        company: "Taiko",
    },
    {
        image: "/img/speakers/joaquin.png",
        name: "Joaquin Mendes",
        title: "COO",
        company: "Taiko",
    },
    {
        image: "/img/speakers/dan.png",
        name: "Dan Park",
        title: "Research Associate",
        company: "Hashed",
    },
    {
        image: "/img/speakers/keith.png",
        name: "Keith Chen",
        title: "Managing Partner",
        company: "SNZ Holding",
    },
    {
        image: "/img/speakers/kevin.png",
        name: "Kevin Lee",
        title: "Founder",
        company: "L2IV",
    },
    {
        image: "/img/speakers/kun.png",
        name: "Kun Peng",
        title: "Partner",
        company: "Stanford Blockchain",
    },
    {
        image: "/img/speakers/nick.png",
        name: "Nick Shaheenn",
        title: "Director of BD",
        company: "BanklessHQ",
    },
    {
        image: "/img/speakers/jay.png",
        name: "Jay Yu",
        title: "Director of BD",
        company: "Stanford Blockchain Club",
    },
];

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, title, company }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={css.profileCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={css.profileCard__image}
                style={{
                    borderColor: isHovered ? "#e81899" : "transparent",
                }}
            >
                <img src={image} alt={name} />
            </div>
            <h3 className={css.profileCard__name}>{name}</h3>
            <p className={css.profileCard__title}>{title}</p>
            <p className={css.profileCard__company}>{company}</p>
        </div>
    );
};

export const Speakers: React.FC = () => {
    return (
        <section className={css.speakers} id={HOME_PAG.SPEAKERS}>
            <div className={css.speakers_wrapper}>
                <p className={css.speakers_label}>MEET INDUSTRY LEADERS</p>
                <p className={css.speakersText}>Our speakers</p>
                <div className={css.speakerGrid}>
                    {speakers.map((speaker, index) => (
                        <ProfileCard key={index} {...speaker} />
                    ))}
                </div>
            </div>
        </section>
    );
};
