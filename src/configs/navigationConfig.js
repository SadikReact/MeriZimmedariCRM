import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "DASHBOARD",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Plans",
  // },
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    // navLink: "/app/plans/CreatedPlanList",
  },
  // {
  //   id: "Manage",
  //   title: "Manage Auth ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   // navLink: "/app/plans/CreatedPlanList",
  // },
  {
    id: "USERLIST ",
    title: "USER LIST ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/user/UserList",
  },
  {
    id: "Nominee ",
    title: "Nominee List ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/nominee/NomineeList",
  },
  // {
  //   id: "claim",
  //   title: "Claims Bordereaux",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   // navLink: "/app/plans/CreatedPlanList",
  // },

  {
    id: "AssetList",
    title: "Asset List",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/assets/AsstesList",
  },
  // {
  //   id: "createPlan",
  //   title: "Created PlanList",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/plans/CreatedPlanList",
  // },
  // {
  //   id: "planDetails",
  //   title: "Plan Details",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/plans/PlanDetailList",
  // },
  // {
  //   id: "fnIndex",
  //   title: "BMI/HOP Plans",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/scripts/fnIndex",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "PlanType",
  // },
  // {
  //   id: "PlanType",
  //   title: "Plan Type",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/plan/PlanTypeList",
  // },

  // {
  //   id: "plans",
  //   title: "Plans List",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/plans/PlanList",
  // },
  // {
  //   id: "plansprice",
  //   title: "PlanPrice",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/plan/ListPlanPrice",
  // },
  // {
  //   id: "policyRestriction",
  //   title: "Policy Restriction",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/policy/PolicyRestriction",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Plan Benefits",
  // },
  // {
  //   id: "Plan",
  //   title: "Plan Benefits",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/plans/PlanBenefitList",
  // },
  // {
  //   id: "fnoIndexList",
  //   title: "ApplyList",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/applylist/visitorList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Policy",
  // },
  // {
  //   id: "PolicyType",
  //   title: "Policy Type",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/policy/PolicyTypeList",
  // },
  // {
  //   id: "Policies",
  //   title: "Policies",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/policy/PolicyList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Paymemt history",
  // },
  // {
  //   id: "usersList",
  //   title: "Paymemt history",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/payment/paymentHistoryList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Elite Network",
  // },
  // {
  //   id: "allTradeList",
  //   title: "Elite Netwirk List",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/plans/EliteNetworkList",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Create Agent",
  // },

  // {
  //   id: "agentList",
  //   title: "AgentList ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/agent/AgentList",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Report",
  // },
  // {
  //   id: "report",
  //   title: "Agent Report",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/pageSetUp/reportData/report",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Other",
  // },
  // {
  //   id: "AboutUs",
  //   title: "About Us",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/pageSetUp/about/AllaboutUs",
  // },
  // {
  //   id: "ContactUs",
  //   title: "Contact Us",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/ContactUs/ContactUsList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Profile Page",
  // },

  {
    id: "profile",
    title: "My Account",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/profile",
  },

  // {
  //   id: "userAppreciation",
  //   title: "User Appreciation List ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/showAppre/userAppreciation",
  // },

  {
    id: "login",
    title: "Logout ",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/pages/login",
  },
];
export default navigationConfig;
