import Image from 'next/image'

import { Section } from '@/components/Section'
import { Header } from '@/components/Header'
import { Anchor } from '@/components/Anchor'

import rocketCoffee from '@/assets/imgs/rocket-coffee.png'

export default function Home() {
    return (
        <Section id="sect-home-page" legend="Página inicial">
            <div className="w-full">
                <div className="max-w-[32rem] mx-auto mb-16 text-center lg:hidden">
                    <h3 className="text-4xl font-bold leading-[120%] mb-16">
                        O café que fará seu código decolar para o próximo nível.
                    </h3>

                    <Anchor text="Pegar meu café" link="/" />
                </div>

                <Header title="Great Coffee" subtitle="Great Code" />

                <Image
                    className="w-3/5 mt-14 mx-auto object-contain"
                    src={rocketCoffee}
                    alt="Copos de café personalizados"
                />
            </div>
        </Section>
    )
}
