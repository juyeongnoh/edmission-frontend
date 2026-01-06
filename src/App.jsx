import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./LandingPage";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/user/Dashboard";
import Checklist from "./pages/user/Checklist";
import Timeline from "./pages/User/Timeline";
import BasicInfo from "./pages/student-data/BasicInfo";
import Academics from "./pages/student-data/Academics";
import CollegeExplorer from "./pages/college/CollegeExplorer";
import MyCollegeList from "./pages/college/MyCollegeList";
import ActivityBuilder from "./pages/college/builder/ActivityBuilder";
import AwardBuilder from "./pages/college/builder/AwardBuilder";
import CollegeListBuilder from "./pages/college/builder/CollegeListBuilder";
import AskUnni from "./pages/college/AskUnni";
import EssayMentor from "./pages/college/EssayMentor";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="checklist" element={<Checklist />} />
          <Route path="timeline" element={<Timeline />} />

          <Route path="basic-info" element={<BasicInfo />} />
          <Route path="academics" element={<Academics />} />

          <Route path="college-explorer" element={<CollegeExplorer />} />
          <Route path="my-college-list" element={<MyCollegeList />} />
          <Route path="activity-builder" element={<ActivityBuilder />} />
          <Route path="award-builder" element={<AwardBuilder />} />
          <Route path="college-list-builder" element={<CollegeListBuilder />} />
          <Route path="essay-mentor" element={<EssayMentor />} />
          <Route path="ask-unni" element={<AskUnni />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
