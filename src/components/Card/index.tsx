import React, { ReactNode } from 'react';
import '../../theme/card.scss';

interface CardProps {
  /**
   * @description header slots
   */
  header?: ReactNode;
  /**
   * @description body slots
   */
  body?: ReactNode;
  /**
   * @description You can define when the shadows of the display card
   * @default 'never'
   */
  shadow?: 'always' | 'hover' | 'never';
}

const Card = (props: CardProps) => {
  const { header, body, shadow = 'never' } = props;
  return (
    <div className={`el-card is-${shadow}-shadow`}>
      {header && <div className="el-card__header">{header}</div>}
      {body && <div className="el-card__body">{body}</div>}
    </div>
  );
};

export { Card };
