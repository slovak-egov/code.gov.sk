import { HTMLAttributes } from "react";

import IdSkModule from "../IdSk/IdSkModule";

type Props = HTMLAttributes<HTMLTableElement>;

const Table = ({ children }: Props) => (
  <IdSkModule moduleType="idsk-table">
    <table className="idsk-table">{children}</table>
  </IdSkModule>
);

export default Table;
