/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { NewsDetail } from '@/pages/NewsDetail';
import { NewsList } from '@/pages/NewsList';
import { PlayerDetail } from '@/pages/PlayerDetail';
import { SquadList } from '@/pages/SquadList';
import { Login } from '@/pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="squad" element={<SquadList />} />
          <Route path="squad/:id" element={<PlayerDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
