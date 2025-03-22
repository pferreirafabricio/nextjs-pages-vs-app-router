import { NextPageWithLayout } from "./_app";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/hello");
    const data = await res.json();

    return { props: { name: data.name } };
}

type MyNameSsrPageProps = {
    name: string
} & NextPageWithLayout;

export default function MyNameSsrPage({ name }: MyNameSsrPageProps) {
    return <>My name is: {name}</>
}