(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[201],{2379:function(e,t,a){"use strict";a.r(t);var s=a(51),n=a(13),o=a(14),l=a(16),i=a(15),r=a(0),c=a.n(r),m=a(1146),u=a(1144),d=a(1145),h=a(171),p=a(1149),_=a(1162),E=a(1163),g=a(807),v=a(1164),y=a(56),S=a(563),I=(a(800),a(801),a(876)),O=a.n(I),f=(a(806),a(804),a(805),a(564),a(795)),V=a(793),R=a.n(V),N=(a(1333),function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).ViewPlanBenefit=function(){var e=o.props.match.params.id;console.log(e),S.a.get("/benefite/view-benefite-by-id/".concat(e)).then((function(e){console.log(e.data.Benefite[0]),o.setState({policyTypeList:e.data.Benefite});var t=e.data.Benefite[0],a=t.planBenefitsCode,s=t.Inacuteonset;console.log(s[0].name),o.setState({planBenefitsCode:a,Inacuteonset:s[0].name})})).catch((function(e){R()("Something Went Wrong")}))},o.changeHandler=function(e){o.setState(Object(s.a)({},e.target.name,e.target.value))},o.state={policy:"",planBenefitsCode:"",preExistingCoverage:"",Inacuteonset:"",preExMax:"",Inhospital_room:"",Inhostpital_intensive:"",Insurgeon:"",Inanesthtist:"",Inassistant_surgeon:"",Indoctors_nonsurgical:"",Inconsultant_doctor:"",Inpreadmission_tests:"",Outsurgical_room:"",Outsurgeon:"",Outanesthetist:"",Outassistant_surgeon:"",Outdoctors_nonsurgical:"",Outdiagnostic_xray:"",Outcat_scan:"",Outhostpital_emergency:"",Outprescription_drugs:"",Outambulance_services:"",Outrehabilation_braces:"",Outdental_treatment:"",Outchemotherapy:"",Outphysical_occupational:"",Outprivate_duty:"",Outpregnancy_childbirth:"",Outchiropractic_care:"",Outmisc_test_procedures:"",Outpsychotherapy:"",Outshots_injections:"",Outtelehealth:"",OutMental_Nervous_Disorder:"",Outmedical_evacuation:"",Outrepariation_remains:"",Outintercollegiate:"",Trip_HospitalAdmission_Guarantee:"",Trip_MedicalExpense_Guarantee:"",Trip_Baggage_Delay:"",Trip_Burial_Cremation:"",Trip_CheckedLostStolen_Baggage:"",Trip_FeloniousAssult_ViolentCrime:"",Trip_HospitalStay_Confinement:"",Trip_SeatBelt:"",Trip_Airbag:"",Trip_Cancellation:"",Trip_Delay:"",Trip_Interruption:""},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.ViewPlanBenefit()}},{key:"render",value:function(){var e;return c.a.createElement("div",null,c.a.createElement(f.a,{breadCrumbTitle:" View PlanBenefits",breadCrumbParent:"Home",breadCrumbActive:" View PlanBenefits "}),c.a.createElement(m.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(d.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View PlanBenefits")),c.a.createElement(d.a,null,c.a.createElement(y.b,{render:function(e){var t=e.history;return c.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/plans/PlanBenefitList")}},"Back")}}))),c.a.createElement(p.a,null,c.a.createElement(_.a,{className:"m-1"},c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:""},c.a.createElement(E.a,{for:"data-category"},"PlanBenefitsCode"),c.a.createElement(g.a,null,c.a.createElement(v.a,{type:"select",id:"data-category",name:"planBenefitsCode",value:this.state.planBenefitsCode,onChange:this.handlePlanBenefits},c.a.createElement("option",{value:"classico_10"},"classico_10"),c.a.createElement("option",{value:"DIP_AME_100_ST"},"DIP_AME_100_ST"),c.a.createElement("option",{value:"DIP_AME_1000_ST"},"DIP_AME_1000_ST"),c.a.createElement("option",{value:"DIP_AME_20_ST"},"DIP_AME_20_ST"),c.a.createElement("option",{value:"DIP_AME_250_ST"},"DIP_AME_250_ST"),c.a.createElement("option",{value:"DIP_AME_50_ST"},"DIP_AME_50_ST"),c.a.createElement("option",{value:"DIP_AME_500_ST"},"DIP_AME_500_ST"),c.a.createElement("option",{value:"DIP_INT_100_ST"},"DIP_INT_100_ST"),c.a.createElement("option",{value:"DIP_INT_1000_ST"},"DIP_INT_1000_ST")))),c.a.createElement(d.a,{className:"",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,null,"PreExistingCoverage"),c.a.createElement(O.a,{options:this.state.options,selectedValues:this.state.preExistingCoverageData,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"})),c.a.createElement(d.a,{className:"",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inacuteonset"),c.a.createElement(O.a,{options:this.state.InacuteonsetList,selectedValues:this.state.Inacuteonset.length>0?[this.state.Inacuteonset[0]]:[],onSelect:this.onSelect1,onRemove:this.onRemove1,displayValue:"name"})),c.a.createElement(d.a,{className:"",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"PreExMax"),c.a.createElement(O.a,{options:this.state.preExMaxList,selectedValues:this.state.preExMaxarr,onSelect:this.onSelect2,onRemove:this.onRemove2,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inhospital Room"),c.a.createElement(O.a,{options:this.state.InhospitalRoomList,selectedValues:this.state.InhospitalRoomarr,onSelect:this.onSelect3,onRemove:this.onRemove3,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inhostpital Intensive"),c.a.createElement(O.a,{options:this.state.InhostpitalIntensiveList,selectedValues:this.state.InhostpitalIntensiveArr,onSelect:this.onSelect4,onRemove:this.onRemove4,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Insurgeon "),c.a.createElement(O.a,{options:this.state.InsurgeonList,selectedValues:this.state.InsurgeonArr,onSelect:this.onSelect5,onRemove:this.onRemove5,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inanesthtist "),c.a.createElement(O.a,{options:this.state.InanesthtList,selectedValues:this.state.InanesthtArr,onSelect:this.onSelect6,onRemove:this.onRemove6,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inassistant surgeon "),c.a.createElement(O.a,{options:this.state.Inassistant_surgeonList,selectedValues:this.state.Inassistant_surgeonArr,onSelect:this.onSelect7,onRemove:this.onRemove7,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Indoctors Nonsurgical"),c.a.createElement(O.a,{options:this.state.Indoctors_nonsurgicalList,selectedValues:this.state.Indoctors_nonsurgicalArr,onSelect:this.onSelect8,onRemove:this.onRemove8,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inconsultant Doctor "),c.a.createElement(O.a,{options:this.state.Inconsultant_doctorList,selectedValues:this.state.Inconsultant_doctorArr,onSelect:this.onSelect9,onRemove:this.onRemove9,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inpreadmission Tests "),c.a.createElement(O.a,{options:this.state.Inpreadmission_testsList,selectedValues:this.state.Inpreadmission_testsArr,onSelect:this.onSelect10,onRemove:this.onRemove10,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outsurgical Room "),c.a.createElement(O.a,{options:this.state.Outsurgical_roomList,selectedValues:this.state.Outsurgical_roomArr,onSelect:this.onSelect11,onRemove:this.onRemove11,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outsurgeon"),c.a.createElement(O.a,{options:this.state.OutsurgeonList,selectedValues:this.state.OutsurgeonArr,onSelect:this.onSelect12,onRemove:this.onRemove12,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outanesthetist"),c.a.createElement(O.a,{options:this.state.OutanesthetistList,selectedValues:this.state.OutanesthetistArr,onSelect:this.onSelect13,onRemove:this.onRemove13,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outassistant Surgeon"),c.a.createElement(O.a,{options:this.state.Outassistant_surgeonList,selectedValues:this.state.Outassistant_surgeonArr,onSelect:this.onSelect14,onRemove:this.onRemove14,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outdoctors Nonsurgical"),c.a.createElement(O.a,{options:this.state.Outdoctors_nonsurgicalList,selectedValues:this.state.Outdoctors_nonsurgicalArr,onSelect:this.onSelect15,onRemove:this.onRemove15,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outdiagnostic_xray"),c.a.createElement(O.a,{options:this.state.Outdiagnostic_xrayList,selectedValues:this.state.Outdiagnostic_xrayArr,onSelect:this.onSelect16,onRemove:this.onRemove16,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outcat Scan"),c.a.createElement(O.a,{options:this.state.Outcat_scanList,selectedValues:this.state.Outcat_scanArr,onSelect:this.onSelect17,onRemove:this.onRemove17,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outhostpital Emergency"),c.a.createElement(O.a,{options:this.state.Outhostpital_emergencyList,selectedValues:this.state.Outhostpital_emergencyArr,onSelect:this.onSelect18,onRemove:this.onRemove18,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"}," Outprescription Drugs"),c.a.createElement(O.a,{options:this.state.Outprescription_drugsList,selectedValues:this.state.Outprescription_drugsArr,onSelect:this.onSelect19,onRemove:this.onRemove19,displayValue:"name"})),c.a.createElement(d.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"}," Outambulance_services"),c.a.createElement(O.a,{options:this.state.Outambulance_servicesList,selectedValues:this.state.Outambulance_servicesArr,onSelect:this.onSelect20,onRemove:this.onRemove20,displayValue:"name"})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:""},c.a.createElement(E.a,{for:"data-category"},"Policy"),c.a.createElement(g.a,null,c.a.createElement(v.a,{type:"select",id:"data-category",name:"policyName",value:this.state.policy,onChange:this.handlePlanBenefits,defaultValue:""},c.a.createElement("option",{disabled:!0,value:""},"Select Policy"),null===(e=this.state.policyList)||void 0===e?void 0:e.map((function(e){return c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.policyName)})))))),c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:" my-2 mr-1 mb-1"},"Submit")))))))}}]),a}(c.a.Component));t.default=N}}]);
//# sourceMappingURL=201.ce4d137c.chunk.js.map