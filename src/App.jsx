import React, { useState } from "react";
import { useRoutes, Link, useQueryParams } from 'raviger'
import ListApp from './route/ListApp.jsx'
import EditTask from './route/EditTask.jsx'

const routes = {
  '/': () => <ListApp />,
  '/task/:id/edit': ({ id }) => <EditTask index={id}/>,
}

function App() {
  let route = useRoutes(routes);
  /**
   * [
      { text: 'Learn js', done: false },
      { text: 'Clean bedroom', done: true },
      { text: 'TODO ??', done: flase },
    ]
   */

  return (
  <div className={"text-center"}>
    <div>
      <Link href="/">List App</Link>
    </div>
    {route}
  </div>
  );
}

export default App;
