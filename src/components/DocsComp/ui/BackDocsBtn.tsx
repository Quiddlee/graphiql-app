import React from 'react';

import { createComponent } from '@lit/react';
import { MdIcon } from '@material/web/icon/icon';

const Icon = createComponent({
  react: React,
  tagName: 'md-icon',
  elementClass: MdIcon,
});

const BackDocsBtn = ({ onClick, title }: { onClick: () => void; title: string }) => {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-1 rounded-full p-2 hover:bg-slate-500/30">
      <Icon>arrow_back_ios</Icon>
      <span className="text-2xl">{title}</span>
    </button>
  );
};

export default BackDocsBtn;
