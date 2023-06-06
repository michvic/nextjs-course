import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"

export async function getStaticProps() {
    const URL_API = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
    const faq = await fetch(URL_API).then(res => res.json())

    return {
        props:{
            faq
        }
    }
}

function FAQPages({faq}) {

    return (
        <div>
            <Head>
                <title>FAQ - Alura Case Campanha</title>
            </Head>
            <h1>Alura Cases - Paginas de perguntas FAQ</h1>
            <Link href='/'>Ir para Home Page</Link>
            <ul>
                {faq.map(({answer, question}) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
  }
  
  export default FAQPages