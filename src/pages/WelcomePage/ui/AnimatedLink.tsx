import { FC, PropsWithChildren } from 'react';

import { Link, LinkProps, unstable_useViewTransitionState as useViewTransitionState } from 'react-router-dom';

type AnimatedLinkProps = PropsWithChildren &
  LinkProps & {
    to: string;
  };

const AnimatedLink: FC<AnimatedLinkProps> = ({ children, to, ...props }) => {
  useViewTransitionState(to);

  return (
    <Link {...props} unstable_viewTransition to={to}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
