import { Link } from 'react-router-dom';

type IItem = {
  title: string;
  link?: string;
};

type BreadcrumbsProps = {
  items: IItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <div className="govuk-breadcrumbs">
    <ol className="govuk-breadcrumbs__list">
      {items.map((item) => (
        <li className="govuk-breadcrumbs__list-item" key={item.title}>
          {item.link ? (
            <Link className="govuk-breadcrumbs__link" to={item.link}>
              {item.title}
            </Link>
          ) : (
            item.title
          )}
        </li>
      ))}
    </ol>
  </div>
);
export default Breadcrumbs;
