import { Switch, Route } from "react-router-dom";

import SurveysPage from "./pages/surveysPage";
import CreateSurveyPage from "./pages/createSurveyPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SurveysPage} />
      <Route path="/create" component={CreateSurveyPage} />
    </Switch>
  );
};

export default Routes