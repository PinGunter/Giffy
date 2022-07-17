import React from "react";
import { Redirect } from "wouter";
import Gif from "../../components/Gif";
import Spinner from "../../components/Spinner";
import useSingleGif from "../../hooks/useSingleGif";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif, isLoading } = useSingleGif({ id: params.id });

  const title = gif ? gif.title : "";

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />;
      </>
    );
  return (
    <>
      <Helmet>
        <title>{title} || Giffy</title>
        <meta name="description" content={`Detalle de ${title}`} />
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
