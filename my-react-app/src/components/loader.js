import { data } from "react-router";
import logements from '../data/logements.json';
import { redirect } from "react-router-dom";

export async function loader({ params }) {
    const record = await logements.find((logement) => logement.id === params.id);
  if (!record) {
    //throw data("Record Not Found", { status: 404 });
    throw redirect("/404");
  }
  return record;
}

