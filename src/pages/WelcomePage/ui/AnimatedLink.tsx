import { FC, PropsWithChildren } from 'react';

import { Link, unstable_useViewTransitionState as useViewTransitionState } from 'react-router-dom';

type AnimatedLinkProps = PropsWithChildren & {
  to: string;
};

const AnimatedLink: FC<AnimatedLinkProps> = ({ children, to }) => {
  useViewTransitionState(to);

  return (
    <Link unstable_viewTransition to={to}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
