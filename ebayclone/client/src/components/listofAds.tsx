import * as React from "react";
import { Link } from "react-router-dom";

export default function ListofAds(props: any) {
  return (
    <div>
      <h2>For sale:</h2>
      <ul>
        {props.Ads.map((ad: any) => (
          <li key={ad.id}>
            <Link to={`/products/${ad.id}`}><strong>Product:</strong> {ad.title} Price  €{ad.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
