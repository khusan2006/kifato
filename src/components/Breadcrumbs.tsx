import { NavLink } from "react-router-dom";

type BreadcrumbsProps = {
    breadcrumbs: {
        id: number;
        name: string;
        href: string;
    }[]
}
const Breadcrumbs = ({breadcrumbs}: BreadcrumbsProps) => {
  return (
    <ol className="mb-20 flex items-center space-x-2 pt-6">
      {breadcrumbs.map((breadcrumb, i) => (
        <li key={breadcrumb.href}>
          <div className="flex items-center text-sm">
            <NavLink
              to={breadcrumb.href}
              className="font-medium text-sm text-muted-foreground hover:text-gray-900"
            >
              {breadcrumb.name}
            </NavLink>
            {i !== breadcrumbs.length - 1 ? (
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
