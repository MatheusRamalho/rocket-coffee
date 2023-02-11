import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Link } from "../../components/Link";

import rocketCoffee from '../../assets/imgs/rocket-coffee.png';

export const HomePage = () => {
    return (
        <Section id="sect-home-page" legend="Página inicial">
            <div className="w w--100">
                <div className="text-mobile">
                    <h3 className="mb mb--7"> O café que fará seu código decolar para o próximo nível. </h3>
                    <Link text="Pegar meu café" link="/" />
                </div>

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
