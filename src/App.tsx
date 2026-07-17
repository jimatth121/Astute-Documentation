import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import {
  Overview,
  HowItWorks,
  TrustLevels,
  ReadinessScore,
} from "./pages/Welcome";
import { FundSeeker, Investor, Firm, Lender, Broker } from "./pages/Roles";
import {
  UsingVerification,
  UsingMatches,
  UsingDealRooms,
  UsingDocuments,
  UsingNotifications,
  UsingBilling,
  UsingAssistant,
} from "./pages/Using";
import { DevDocs } from "./pages/DevDocs";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/trust-levels" element={<TrustLevels />} />
        <Route path="/readiness-score" element={<ReadinessScore />} />

        <Route path="/roles/fund-seeker" element={<FundSeeker />} />
        <Route path="/roles/investor" element={<Investor />} />
        <Route path="/roles/firm" element={<Firm />} />
        <Route path="/roles/lender" element={<Lender />} />
        <Route path="/roles/broker" element={<Broker />} />

        <Route path="/using/verification" element={<UsingVerification />} />
        <Route path="/using/assistant" element={<UsingAssistant />} />
        <Route path="/using/matches" element={<UsingMatches />} />
        <Route path="/using/deal-rooms" element={<UsingDealRooms />} />
        <Route path="/using/documents" element={<UsingDocuments />} />
        <Route path="/using/notifications" element={<UsingNotifications />} />
        <Route path="/using/billing" element={<UsingBilling />} />

        <Route path="/dev-docs" element={<DevDocs />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
