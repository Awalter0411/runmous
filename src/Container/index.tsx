import React from 'react';
import './index.scss';

interface ContainerProps {
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description container direction
   * @default "vertical"
   */
  direction?: 'vertical' | 'horizontal';
}

type LayoutProps = Omit<ContainerProps, 'direction'>;

/**
 * 可以这样写属性描述
 * @description       也可以显式加上描述名
 * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述，使用 description 兜底
 * @default           支持定义默认值
 */
type HeaderProps = LayoutProps & {
  /**
   * @description header height
   * @default "200px"
   */
  height?: string;
};

type FooterProps = LayoutProps & {
  /**
   * @description footer height
   * @default "200px"
   */
  height?: string;
};

type AsideProps = LayoutProps & {
  /**
   * @description aside height
   * @default "200px"
   */
  width?: string;
};

type MainProps = LayoutProps;

const Container = (props: ContainerProps) => {
  const { children, direction = 'vertical' } = props;
  return (
    <section
      className={`el-container runmous-container ${
        direction === 'vertical' ? 'is-vertical' : 'is-horizontal'
      }`}
    >
      {children}
    </section>
  );
};

const Header = (props: HeaderProps) => {
  const { children, height = '200x' } = props;
  return (
    <header className="el-header runmous-header" style={{ height }}>
      {children}
    </header>
  );
};

const Main = (props: MainProps) => {
  const { children } = props;
  return <header className="el-main runmous-main">{children}</header>;
};

const Footer = (props: FooterProps) => {
  const { children, height } = props;
  return (
    <footer className="el-footer runmous-footer" style={{ height }}>
      {children}
    </footer>
  );
};

const Aside = (props: AsideProps) => {
  const { children, width = '200px' } = props;
  return (
    <aside className="el-aside runmous-aside" style={{ width }}>
      {children}
    </aside>
  );
};

export { Container, Header, Main, Footer, Aside };
