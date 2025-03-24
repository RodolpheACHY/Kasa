import logements from '../../data/logements.json';
import { redirect } from "react-router-dom";

export async function loader({ params }) {
    const record = await logements.find((logement) => logement.id === params.id);
  if (!record) {
    throw redirect("*");
  }
  return record;
}

