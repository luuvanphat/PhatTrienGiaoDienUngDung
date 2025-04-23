import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const MainContent = ({ children }) => {
  const location = useLocation();
  
  return (
    <main className="main-content">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page"
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

export default MainContent;