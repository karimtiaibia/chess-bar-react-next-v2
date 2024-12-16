import Bar from "./[slug]";
import database from "@/_database";
import serializedDate from "@/lib/serializeDate";

export default function Bars({ bars }) {
    return (
        <>
            <Bar bars={bars} />
        </>
    );
}
