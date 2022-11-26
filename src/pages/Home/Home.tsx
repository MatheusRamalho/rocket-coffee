import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import rocketCoffee from '../../assets/rocket-coffee.png';

export const HomePage = () => {
    return (
        <Section id="sect-home-page" legend="Página inicial">
            <div className="w w--100">
                <Header
                    title="Great Coffee"
                    subtitle="Great Code"
                />

                <img
                    className="coffee-img"
                    src={rocketCoffee}
                    aria-label="Copos de café personalizados"
                />
            </div>
        </Section>
    );
}
