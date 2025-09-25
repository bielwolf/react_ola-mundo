import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gabriel!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Minha outra foto"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
            Oi, tudo bem? Eu sou estudante de Análise e Desenvolvimento de Sistemas e estou muito animado em compartilhar um pouco da minha trajetória com você.
            </p>
            <p className={styles.paragrafo}>
            Minha história com tecnologia começou cedo, com curiosidade em entender como as coisas funcionavam por trás das telas. Com o tempo, fui me aprofundando e descobrindo que a programação era não apenas uma ferramenta poderosa, mas também uma área que despertava meu interesse de forma especial. Desde então, venho explorando linguagens, bancos de dados e conceitos que me aproximam cada vez mais do universo do desenvolvimento de software.
            </p>
            <p className={styles.paragrafo}>
            Durante essa caminhada, percebi que meu objetivo vai além de apenas programar. Eu quero construir uma carreira sólida como Full Stack Developer e, em seguida, migrar para DevOps e Cloud Computing, áreas que me atraem por unirem conhecimento técnico, automação e visão de infraestrutura. Essa transição é parte do meu plano de aprendizado, sempre buscando organizar os estudos de forma clara e progressiva.
            </p>
            <p className={styles.paragrafo}>
            Hoje, além de estar cursando ADS, também conquistei certificações em bancos de dados, Git, HTTP, Linux e MongoDB, além de praticar com projetos pessoais. Esses passos me ajudam a consolidar a base técnica enquanto me preparo para atuar profissionalmente. Meu objetivo é unir prática e teoria, aprendendo continuamente e me desenvolvendo como profissional da área.
            </p>
            <p className={styles.paragrafo}>
            Estou animado com essa jornada e acredito que cada etapa tem sido essencial para me aproximar dos meus sonhos. Espero em breve poder compartilhar mais conquistas e aprendizados com você!
            </p>

        </PostModelo>
    )
}