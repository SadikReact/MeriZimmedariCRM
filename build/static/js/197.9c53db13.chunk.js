(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[197],{2377:function(e,t,a){"use strict";a.r(t);var n=a(51),o=a(13),s=a(14),r=a(171),l=a(16),i=a(15),_=a(0),c=a.n(_),u=a(1143),m=a(1141),p=a(1142),S=a(172),I=a(1146),v=a(1159),E=a(1160),d=a(804),O=a(1161),h=a(56),A=a(168),R=(a(802),a(803),a(876)),g=a.n(R),P=(a(808),a(805),a(806),a(564),a(795)),T=a(793),N=a.n(T),y=a(1330),b=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).policyType=function(){A.a.get("/admin/get_pt").then((function(e){console.log(e.data.data),s.setState({policyTypeList:e.data.data})})).catch((function(e){N()("Something Went Wrong")}))},s.AllPolicyList=function(){A.a.get("/admin/get_policies").then((function(e){console.log(e.data.data),s.setState({policyList:e.data.data})}))},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.handlePlanBenefits=function(e){console.log(e.target.value),s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=localStorage.getItem("userId"),a={planBenefitsCode:s.state.planBenefitsCode,policy_ID_fk:s.state.policyName,preExistingCoverage:s.state.preExistingCoverageData,preExMax:s.state.preExMaxarr,Inacuteonset:s.state.selectedValue,Inhospital_room:s.state.InhospitalRoomarr,Inhostpital_intensive:s.state.InhostpitalIntensiveArr,Insurgeon:s.state.InsurgeonArr,Inanesthtist:s.state.InanesthtArr,Inassistant_surgeon:s.state.Inassistant_surgeonArr,Indoctors_nonsurgical:s.state.Indoctors_nonsurgicalArr,Inconsultant_doctor:s.state.Inconsultant_doctorArr,Inpreadmission_tests:s.state.Inpreadmission_testsArr,Outsurgical_room:s.state.Outsurgical_roomArr,Outsurgeon:s.state.OutsurgeonArr,Outanesthetist:s.state.OutanesthetistArr,Outassistant_surgeon:s.state.Outassistant_surgeonArr,Outdoctors_nonsurgical:s.state.Outdoctors_nonsurgicalArr,Outdiagnostic_xray:s.state.Outdiagnostic_xrayArr,Outcat_scan:s.state.Outcat_scanArr,Outhostpital_emergency:s.state.Outhostpital_emergencyArr,Outprescription_drugs:s.state.Outprescription_drugs,Outambulance_services:s.state.Outambulance_servicesArr,Outrehabilation_braces:s.state.Outrehabilation_bracesArr,Outdental_treatment:s.state.Outdental_treatmentArr,Outchemotherapy:s.state.OutchemotherapyArr,Outphysical_occupational:s.state.Outphysical_occupationalArr,Outprivate_duty:s.state.Outprivate_dutyArr,Outpregnancy_childbirth:s.state.Outpregnancy_childbirthArr,Outchiropractic_care:s.state.Outchiropractic_careArr,Outpsychotherapy:s.state.OutpsychotherapyArr,Outmisc_test_procedures:s.state.Outmisc_test_proceduresArr,Outtelehealth:s.state.OuttelehealthArr,Outshots_injections:s.state.Outshots_injectionsArr,OutMental_Nervous_Disorder:s.state.OutMental_Nervous_DisorderArr,Outmedical_evacuation:s.state.Outmedical_evacuationArr,Outrepariation_remains:s.state.Outrepariation_remainsArr,Outintercollegiate:s.state.OutintercollegiateArr,Outaccidental_death:s.state.Outaccidental_deathArr,Trip_HospitalAdmission_Guarantee:s.state.Trip_HospitalAdmission_GuaranteeArr,Trip_MedicalExpense_Guarantee:s.state.Trip_MedicalExpense_GuaranteeArr,Trip_Baggage_Delay:s.state.Trip_Baggage_DelayArr,Trip_Burial_Cremation:s.state.Trip_Burial_CremationArr,Trip_CheckedLostStolen_Baggage:s.state.Trip_CheckedLostStolen_BaggageArr,Trip_FeloniousAssult_ViolentCrime:s.state.Trip_FeloniousAssult_ViolentCrimeArr,Trip_HospitalStay_Confinement:s.state.Trip_HospitalStay_ConfinementArr,Trip_SeatBelt:s.state.Trip_SeatBeltArr,Trip_Airbag:s.state.Trip_AirbagArr,Trip_Cancellation:s.state.Trip_CancellationArr,Trip_Delay:s.state.Trip_DelayArr,Trip_Interruption:s.state.Trip_InterruptionArr,created_by:t};console.log(a),A.a.post("/benefite/save-benefite",a).then((function(e){console.log(e),N()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/plans/PlanBenefitList")})).catch((function(e){console.log(e)}))},s.state={policy:"",planBenefitsCode:"",preExistingCoverage:"",Inacuteonset:"",preExMax:"",Inhospital_room:"",Inhostpital_intensive:"",Insurgeon:"",Inanesthtist:"",Inassistant_surgeon:"",Indoctors_nonsurgical:"",Inconsultant_doctor:"",Inpreadmission_tests:"",Outsurgical_room:"",Outsurgeon:"",Outanesthetist:"",Outassistant_surgeon:"",Outdoctors_nonsurgical:"",Outdiagnostic_xray:"",Outcat_scan:"",Outhostpital_emergency:"",Outprescription_drugs:"",Outambulance_services:"",Outrehabilation_braces:"",Outdental_treatment:"",Outchemotherapy:"",Outphysical_occupational:"",Outprivate_duty:"",Outpregnancy_childbirth:"",Outchiropractic_care:"",Outmisc_test_procedures:"",Outpsychotherapy:"",Outshots_injections:"",Outtelehealth:"",OutMental_Nervous_Disorder:"",Outmedical_evacuation:"",Outrepariation_remains:"",Outintercollegiate:"",Trip_HospitalAdmission_Guarantee:"",Trip_MedicalExpense_Guarantee:"",Trip_Baggage_Delay:"",Trip_Burial_Cremation:"",Trip_CheckedLostStolen_Baggage:"",Trip_FeloniousAssult_ViolentCrime:"",Trip_HospitalStay_Confinement:"",Trip_SeatBelt:"",Trip_Airbag:"",Trip_Cancellation:"",Trip_Delay:"",Trip_Interruption:"",selectedOptions:[],preExistingCoverageData:[{}],selectedValue:[],preExMaxarr:[],InhospitalRoomarr:[],InhostpitalIntensiveArr:[],InsurgeonArr:[],Inassistant_surgeonArr:[],InanesthtArr:[],Indoctors_nonsurgicalArr:[],Inconsultant_doctorArr:[],Inpreadmission_testsArr:[],Outsurgical_roomArr:[],OutsurgeonArr:[],OutanesthetistArr:[],Outassistant_surgeonArr:[],Outdoctors_nonsurgicalArr:[],Outdiagnostic_xrayArr:[],Outcat_scanArr:[],Outhostpital_emergencyArr:[],Outprescription_drugsArr:[],Outrehabilation_bracesArr:[],Outambulance_servicesArr:[]},s.state={options:y.u,InacuteonsetList:y.a,preExMaxList:y.v,InhospitalRoomList:y.f,InhostpitalIntensiveList:y.g,InsurgeonList:y.i,InanesthtList:y.b,Inassistant_surgeonList:y.c,Indoctors_nonsurgicalList:y.e,Inconsultant_doctorList:y.d,Inpreadmission_testsList:y.h,Outsurgical_roomList:y.t,OutsurgeonList:y.s,OutanesthetistList:y.k,Outassistant_surgeonList:y.l,Outdoctors_nonsurgicalList:y.o,Outdiagnostic_xrayList:y.n,Outcat_scanList:y.m,Outhostpital_emergencyList:y.p,Outprescription_drugsList:y.q,Outrehabilation_bracesList:y.r,Outambulance_servicesList:y.j},s.onSelect=s.onSelect.bind(Object(r.a)(s)),s.onRemove=s.onRemove.bind(Object(r.a)(s)),s.onSelect1=s.onSelect1.bind(Object(r.a)(s)),s.onRemove1=s.onRemove1.bind(Object(r.a)(s)),s.onSelect2=s.onSelect2.bind(Object(r.a)(s)),s.onRemove2=s.onRemove2.bind(Object(r.a)(s)),s.onSelect3=s.onSelect3.bind(Object(r.a)(s)),s.onRemove3=s.onRemove3.bind(Object(r.a)(s)),s.onSelect4=s.onSelect4.bind(Object(r.a)(s)),s.onRemove4=s.onRemove4.bind(Object(r.a)(s)),s.onSelect5=s.onSelect5.bind(Object(r.a)(s)),s.onRemove5=s.onRemove5.bind(Object(r.a)(s)),s.onSelect6=s.onSelect6.bind(Object(r.a)(s)),s.onRemove6=s.onRemove6.bind(Object(r.a)(s)),s.onSelect7=s.onSelect7.bind(Object(r.a)(s)),s.onRemove7=s.onRemove7.bind(Object(r.a)(s)),s.onSelect8=s.onSelect8.bind(Object(r.a)(s)),s.onRemove8=s.onRemove8.bind(Object(r.a)(s)),s.onSelect9=s.onSelect9.bind(Object(r.a)(s)),s.onRemove9=s.onRemove9.bind(Object(r.a)(s)),s.onSelect10=s.onSelect10.bind(Object(r.a)(s)),s.onRemove10=s.onRemove10.bind(Object(r.a)(s)),s.onSelect11=s.onSelect11.bind(Object(r.a)(s)),s.onRemove11=s.onRemove11.bind(Object(r.a)(s)),s.onSelect12=s.onSelect12.bind(Object(r.a)(s)),s.onRemove12=s.onRemove12.bind(Object(r.a)(s)),s.onSelect13=s.onSelect13.bind(Object(r.a)(s)),s.onRemove13=s.onRemove13.bind(Object(r.a)(s)),s.onSelect14=s.onSelect14.bind(Object(r.a)(s)),s.onRemove14=s.onRemove14.bind(Object(r.a)(s)),s.onSelect15=s.onSelect15.bind(Object(r.a)(s)),s.onRemove15=s.onRemove15.bind(Object(r.a)(s)),s.onSelect16=s.onSelect16.bind(Object(r.a)(s)),s.onRemove16=s.onRemove16.bind(Object(r.a)(s)),s.onSelect17=s.onSelect17.bind(Object(r.a)(s)),s.onRemove17=s.onRemove17.bind(Object(r.a)(s)),s.onSelect18=s.onSelect18.bind(Object(r.a)(s)),s.onRemove18=s.onRemove18.bind(Object(r.a)(s)),s.onSelect19=s.onSelect19.bind(Object(r.a)(s)),s.onRemove19=s.onRemove19.bind(Object(r.a)(s)),s.onSelect20=s.onSelect20.bind(Object(r.a)(s)),s.onRemove20=s.onRemove20.bind(Object(r.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.AllPolicyList(),this.policyType()}},{key:"onSelect",value:function(e,t){console.log(e),this.setState({preExistingCoverageData:e})}},{key:"onRemove",value:function(e,t){console.log(t),this.setState({preExistingCoverageData:e})}},{key:"onSelect1",value:function(e,t){this.setState({selectedValue:e})}},{key:"onRemove1",value:function(e,t){this.setState({selectedValue:e})}},{key:"onSelect2",value:function(e,t){this.setState({preExMaxarr:e})}},{key:"onRemove2",value:function(e,t){this.setState({preExMaxarr:e})}},{key:"onSelect3",value:function(e,t){this.setState({InhospitalRoomarr:e})}},{key:"onRemove3",value:function(e){this.setState({InhospitalRoomarr:e})}},{key:"onSelect4",value:function(e){this.setState({InhostpitalIntensiveArr:e})}},{key:"onRemove4",value:function(e){this.setState({InhostpitalIntensiveArr:e})}},{key:"onSelect5",value:function(e){this.setState({InsurgeonArr:e})}},{key:"onRemove5",value:function(e){this.setState({InsurgeonArr:e})}},{key:"onSelect6",value:function(e){this.setState({InanesthtArr:e})}},{key:"onRemove6",value:function(e){this.setState({InanesthtArr:e})}},{key:"onSelect7",value:function(e){this.setState({Inassistant_surgeonArr:e}),console.log(this.state.Inassistant_surgeonArr)}},{key:"onRemove7",value:function(e){this.setState({Inassistant_surgeonArr:e})}},{key:"onSelect8",value:function(e){this.setState({Indoctors_nonsurgicalArr:e}),console.log(this.state.Inassistant_surgeonArr)}},{key:"onRemove8",value:function(e){this.setState({Indoctors_nonsurgicalArr:e})}},{key:"onSelect9",value:function(e){this.setState({Inconsultant_doctorArr:e})}},{key:"onRemove9",value:function(e){this.setState({Inconsultant_doctorArr:e})}},{key:"onSelect10",value:function(e){this.setState({Inpreadmission_testsArr:e})}},{key:"onRemove10",value:function(e){this.setState({Inpreadmission_testsArr:e})}},{key:"onSelect11",value:function(e){this.setState({Outsurgical_roomArr:e})}},{key:"onRemove11",value:function(e){this.setState({Outsurgical_roomArr:e})}},{key:"onSelect12",value:function(e){this.setState({OutsurgeonArr:e})}},{key:"onRemove12",value:function(e){this.setState({OutsurgeonArr:e})}},{key:"onSelect13",value:function(e){this.setState({OutanesthetistArr:e})}},{key:"onRemove13",value:function(e){this.setState({OutanesthetistArr:e})}},{key:"onSelect14",value:function(e){this.setState({Outassistant_surgeonArr:e})}},{key:"onRemove14",value:function(e){this.setState({Outassistant_surgeonArr:e})}},{key:"onSelect15",value:function(e){this.setState({Outdoctors_nonsurgicalArr:e})}},{key:"onRemove15",value:function(e){this.setState({Outdoctors_nonsurgicalArr:e})}},{key:"onSelect16",value:function(e){this.setState({Outdiagnostic_xrayArr:e})}},{key:"onRemove16",value:function(e){this.setState({Outdiagnostic_xrayArr:e})}},{key:"onSelect17",value:function(e){this.setState({Outcat_scanArr:e})}},{key:"onRemove17",value:function(e){this.setState({Outcat_scanArr:e})}},{key:"onSelect18",value:function(e){this.setState({Outhostpital_emergencyArr:e})}},{key:"onRemove18",value:function(e){this.setState({Outhostpital_emergencyArr:e})}},{key:"onSelect19",value:function(e){console.log(e),this.setState({Outprescription_drugsArr:e})}},{key:"onRemove19",value:function(e){console.log(e),this.setState({Outprescription_drugsArr:e})}},{key:"onSelect20",value:function(e){this.setState({Outrehabilation_bracesArr:e})}},{key:"onRemove20",value:function(e){this.setState({Outrehabilation_bracesArr:e})}},{key:"onSelect21",value:function(e){this.setState({Outambulance_servicesArr:e})}},{key:"onRemove21",value:function(e){this.setState({Outambulance_servicesArr:e})}},{key:"render",value:function(){var e;return c.a.createElement("div",null,c.a.createElement(P.a,{breadCrumbTitle:" Add PlanBenefits",breadCrumbParent:"Home",breadCrumbActive:" Add PlanBenefits "}),c.a.createElement(u.a,null,c.a.createElement(m.a,{className:"m-2"},c.a.createElement(p.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add PlanBenefits")),c.a.createElement(p.a,null,c.a.createElement(h.b,{render:function(e){var t=e.history;return c.a.createElement(S.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/plans/PlanBenefitList")}},"Back")}}))),c.a.createElement(I.a,null,c.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(m.a,null,c.a.createElement(p.a,{lg:"6",md:"6",sm:"12",className:""},c.a.createElement(E.a,{for:"data-category"},"PlanBenefitsCode"),c.a.createElement(d.a,null,c.a.createElement(O.a,{type:"select",id:"data-category",name:"planBenefitsCode",value:this.state.planBenefitsCode,onChange:this.handlePlanBenefits},c.a.createElement("option",{value:""},"Select PlanBenefitsCode"),c.a.createElement("option",{value:"classico_10"},"classico_10"),c.a.createElement("option",{value:"DIP_AME_100_ST"},"DIP_AME_100_ST"),c.a.createElement("option",{value:"DIP_AME_1000_ST"},"DIP_AME_1000_ST"),c.a.createElement("option",{value:"DIP_AME_20_ST"},"DIP_AME_20_ST"),c.a.createElement("option",{value:"DIP_AME_250_ST"},"DIP_AME_250_ST"),c.a.createElement("option",{value:"DIP_AME_50_ST"},"DIP_AME_50_ST"),c.a.createElement("option",{value:"DIP_AME_500_ST"},"DIP_AME_500_ST"),c.a.createElement("option",{value:"DIP_INT_100_ST"},"DIP_INT_100_ST"),c.a.createElement("option",{value:"DIP_INT_1000_ST"},"DIP_INT_1000_ST"),c.a.createElement("option",{value:"DIP_INT_20_ST"},"DIP_INT_20_ST"),c.a.createElement("option",{value:"DIP_INT_250_ST"},"DIP_INT_250_ST"),c.a.createElement("option",{value:"DIP_INT_50_ST"},"DIP_INT_50_ST"),c.a.createElement("option",{value:"DIP_INT_500_ST"},"DIP_INT_500_ST"),c.a.createElement("option",{value:"DIP_OTH_100_ST"},"DIP_OTH_100_ST"),c.a.createElement("option",{value:"DIP_OTH_1000_ST"},"DIP_OTH_1000_ST"),c.a.createElement("option",{value:"DIP_OTH_20_ST"},"DIP_OTH_20_ST"),c.a.createElement("option",{value:"DIP_OTH_500_ST"},"DIP_OTH_500_ST"),c.a.createElement("option",{value:"DIP_USA_100_ST"},"DIP_USA_100_ST"),c.a.createElement("option",{value:"DIP_USA_1000_ST"},"DIP_USA_1000_ST"),c.a.createElement("option",{value:"DIP_USA_20_ST"},"DIP_USA_20_ST"),c.a.createElement("option",{value:"DIP_USA_500_ST"},"DIP_USA_500_ST"),c.a.createElement("option",{value:"HOP_CLA_10_PR"},"HOP_CLA_10_PR"),c.a.createElement("option",{value:"HOP_MIN_25_PR"},"HOP_MIN_25_PR"),c.a.createElement("option",{value:"HOP_MIN_50_PR"},"HOP_MIN_50_PR"),c.a.createElement("option",{value:"HOP_MIN_75_PR"},"HOP_MIN_75_PR"),c.a.createElement("option",{value:"HOP_TA_150_PR"},"HOP_TA_150_PR"),c.a.createElement("option",{value:"HOP_TA_300_PR"},"HOP_TA_300_PR"),c.a.createElement("option",{value:"HOP_TA_60_PR"},"HOP_TA_60_PR"),c.a.createElement("option",{value:"HOP_ULT_30_PR"},"HOP_ULT_30_PR"),c.a.createElement("option",{value:"HOP_ULTPL_60_PR"},"HOP_ULTPL_60_PR"),c.a.createElement("option",{value:"HOP_VIP_100_PR"},"HOP_VIP_100_PR"),c.a.createElement("option",{value:"HOP_VIP_250_PR"},"HOP_VIP_250_PR"),c.a.createElement("option",{value:"HOP_WHOP_1000_PR"},"HOP_WHOP_1000_PR"),c.a.createElement("option",{value:"HOP_WHOP_150_PR"},"HOP_WHOP_150_PR"),c.a.createElement("option",{value:"HOP_WHOP_250_PR"},"HOP_WHOP_250_PR"),c.a.createElement("option",{value:"HOP_WHOP_300_PR"},"HOP_WHOP_300_PR"),c.a.createElement("option",{value:"HOP_WHOP_500_PR"},"HOP_WHOP_500_PR"),c.a.createElement("option",{value:"INF_ADD_100_ST"},"INF_ADD_100_ST"),c.a.createElement("option",{value:"INF_ADD_25_ST"},"INF_ADD_25_ST"),c.a.createElement("option",{value:"INF_ADD_50_ST"},"INF_ADD_50_ST"),c.a.createElement("option",{value:"INF_ADV_150_ACUTE"},"INF_ADV_150_ACUTE"),c.a.createElement("option",{value:"INF_ADV_150_ST"},"INF_ADV_150_ST"),c.a.createElement("option",{value:"INF_ADV_75_ACUTE"},"INF_ADV_75_ACUTE"),c.a.createElement("option",{value:"INF_ADV_75_ST"},"INF_ADV_75_ST"),c.a.createElement("option",{value:"INF_CHO_100_ACUTE"},"INF_CHO_100_ACUTE"),c.a.createElement("option",{value:"INF_CHO_150_ACUTE"},"INF_CHO_150_ACUTE"),c.a.createElement("option",{value:"INF_CHO_25_ACUTE"},"INF_CHO_25_ACUTE"),c.a.createElement("option",{value:"INF_CHO_250_ACUTE"},"INF_CHO_250_ACUTE"),c.a.createElement("option",{value:"INF_CHO_50_ACUTE"},"INF_CHO_50_ACUTE"),c.a.createElement("option",{value:"INF_CHO_75_ACUTE"},"INF_CHO_75_ACUTE"),c.a.createElement("option",{value:"INF_ELI_150_PR"},"INF_ELI_150_PR"),c.a.createElement("option",{value:"INF_ELI_250_PR"},"INF_ELI_250_PR"),c.a.createElement("option",{value:"INF_ELI_300_PR"},"INF_ELI_300_PR"),c.a.createElement("option",{value:"INF_ELI_75_PR"},"INF_ELI_75_PR"),c.a.createElement("option",{value:"INF_ELI_ST_150_PR"},"INF_ELI_ST_150_PR"),c.a.createElement("option",{value:"INF_ELI_ST_75_PR"},"INF_ELI_ST_75_PR"),c.a.createElement("option",{value:"INF_ELI90_150_PLUS"},"INF_ELI90_150_PLUS"),c.a.createElement("option",{value:"INF_ELI90_150_PR"},"INF_ELI90_150_PR"),c.a.createElement("option",{value:"INF_ELI90_250_PLUS"},"INF_ELI90_250_PLUS"),c.a.createElement("option",{value:"INF_ELI90_250_PR"},"INF_ELI90_250_PR"),c.a.createElement("option",{value:"INF_ELI90_300_PLUS"},"INF_ELI90_300_PLUS"),c.a.createElement("option",{value:"INF_ELI90_300_PR"},"INF_ELI90_300_PR"),c.a.createElement("option",{value:"INF_ELI90_75_PLUS"},"INF_ELI90_75_PLUS"),c.a.createElement("option",{value:"INF_PRE_100_PR"},"INF_PRE_100_PR"),c.a.createElement("option",{value:"INF_PRE_1000_PR"},"INF_PRE_1000_PR"),c.a.createElement("option",{value:"INF_PRE_150_PR"},"INF_PRE_150_PR"),c.a.createElement("option",{value:"INF_PRE_300_PLUS"},"INF_PRE_300_PLUS"),c.a.createElement("option",{value:"INF_PRE_300_PR"},"INF_PRE_300_PR"),c.a.createElement("option",{value:"INF_PRE_500_PR"},"INF_PRE_500_PR"),c.a.createElement("option",{value:"INF_PRE_ST_100_PR"},"INF_PRE_ST_100_PR"),c.a.createElement("option",{value:"INF_PRE_ST_150_PR"},"INF_PRE_ST_150_PR"),c.a.createElement("option",{value:"INF_SEL_100_ST"},"INF_SEL_100_ST"),c.a.createElement("option",{value:"INF_SEL_25_ST"},"INF_SEL_25_ST"),c.a.createElement("option",{value:"INF_SEL_50_ST"},"INF_SEL_50_ST"),c.a.createElement("option",{value:"INF_SEL_75_ST"},"INF_SEL_75_ST"),c.a.createElement("option",{value:"INF_STA_100_ST"},"INF_STA_100_ST"),c.a.createElement("option",{value:"INF_STA_150_ST"},"INF_STA_150_ST"),c.a.createElement("option",{value:"INF_STA_50_ST"},"INF_STA_50_ST"),c.a.createElement("option",{value:"INF_TRA_150_ST"},"INF_TRA_150_ST"),c.a.createElement("option",{value:"INF_TRA_250_ST"},"INF_TRA_250_ST"),c.a.createElement("option",{value:"INF_TRA_300_ST"},"INF_TRA_300_ST"),c.a.createElement("option",{value:"INF_TRA_75_ST"},"INF_TRA_75_ST"),c.a.createElement("option",{value:"INF_TRA90_150_ST"},"INF_TRA90_150_ST"),c.a.createElement("option",{value:"INF_TRA90_250_ST"},"INF_TRA90_250_ST"),c.a.createElement("option",{value:"INF_TRA90_300_ST"},"INF_TRA90_300_ST"),c.a.createElement("option",{value:"INF_TRA90_75_ST"},"INF_TRA90_75_ST"),c.a.createElement("option",{value:"INF_VISACARE_USA_80_100"},"INF_VISACARE_USA_80_100"),c.a.createElement("option",{value:"INF_VISACARE_USA_80_150"},"INF_VISACARE_USA_80_150"),c.a.createElement("option",{value:"INF_VISACARE_USA_80_300"},"INF_VISACARE_USA_80_300"),c.a.createElement("option",{value:"INF_VISACARE_USA_80_75"},"INF_VISACARE_USA_80_75"),c.a.createElement("option",{value:"INF_VISACARE_USA_90_100"},"INF_VISACARE_USA_90_100"),c.a.createElement("option",{value:"INF_VISACARE_USA_90_150"},"INF_VISACARE_USA_90_150"),c.a.createElement("option",{value:"INF_VISACARE_USA_90_75"},"INF_VISACARE_USA_90_75"),c.a.createElement("option",{value:"Ultra_30"},"Ultra_30"),c.a.createElement("option",{value:"UltraPlus_60"},"UltraPlus_60"),c.a.createElement("option",{value:"USVisit-Pro_90_100"},"USVisit-Pro_90_100"),c.a.createElement("option",{value:"USVisit-Pro_90_150"},"USVisit-Pro_90_150"),c.a.createElement("option",{value:"USVisit-Pro_90_300"},"USVisit-Pro_90_300"),c.a.createElement("option",{value:"USVisit-Pro_90_75"},"USVisit-Pro_90_75"),c.a.createElement("option",{value:"VIP_100 VIPPlus_250"},"VIP_100 VIPPlus_250")))),c.a.createElement(p.a,{className:"",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,null,"PreExistingCoverage"),c.a.createElement(g.a,{options:this.state.options,selectedValues:this.state.preExistingCoverageData,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"})),c.a.createElement(p.a,{className:"",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inacuteonset"),c.a.createElement(g.a,{options:this.state.InacuteonsetList,selectedValues:this.state.selectedValue,onSelect:this.onSelect1,onRemove:this.onRemove1,displayValue:"name"})),c.a.createElement(p.a,{className:"",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"PreExMax"),c.a.createElement(g.a,{options:this.state.preExMaxList,selectedValues:this.state.preExMaxarr,onSelect:this.onSelect2,onRemove:this.onRemove2,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inhospital Room"),c.a.createElement(g.a,{options:this.state.InhospitalRoomList,selectedValues:this.state.InhospitalRoomarr,onSelect:this.onSelect3,onRemove:this.onRemove3,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inhostpital Intensive"),c.a.createElement(g.a,{options:this.state.InhostpitalIntensiveList,selectedValues:this.state.InhostpitalIntensiveArr,onSelect:this.onSelect4,onRemove:this.onRemove4,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Insurgeon "),c.a.createElement(g.a,{options:this.state.InsurgeonList,selectedValues:this.state.InsurgeonArr,onSelect:this.onSelect5,onRemove:this.onRemove5,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inanesthtist "),c.a.createElement(g.a,{options:this.state.InanesthtList,selectedValues:this.state.InanesthtArr,onSelect:this.onSelect6,onRemove:this.onRemove6,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inassistant surgeon "),c.a.createElement(g.a,{options:this.state.Inassistant_surgeonList,selectedValues:this.state.Inassistant_surgeonArr,onSelect:this.onSelect7,onRemove:this.onRemove7,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Indoctors Nonsurgical"),c.a.createElement(g.a,{options:this.state.Indoctors_nonsurgicalList,selectedValues:this.state.Indoctors_nonsurgicalArr,onSelect:this.onSelect8,onRemove:this.onRemove8,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inconsultant Doctor "),c.a.createElement(g.a,{options:this.state.Inconsultant_doctorList,selectedValues:this.state.Inconsultant_doctorArr,onSelect:this.onSelect9,onRemove:this.onRemove9,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Inpreadmission Tests "),c.a.createElement(g.a,{options:this.state.Inpreadmission_testsList,selectedValues:this.state.Inpreadmission_testsArr,onSelect:this.onSelect10,onRemove:this.onRemove10,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outsurgical Room "),c.a.createElement(g.a,{options:this.state.Outsurgical_roomList,selectedValues:this.state.Outsurgical_roomArr,onSelect:this.onSelect11,onRemove:this.onRemove11,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outsurgeon"),c.a.createElement(g.a,{options:this.state.OutsurgeonList,selectedValues:this.state.OutsurgeonArr,onSelect:this.onSelect12,onRemove:this.onRemove12,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outanesthetist"),c.a.createElement(g.a,{options:this.state.OutanesthetistList,selectedValues:this.state.OutanesthetistArr,onSelect:this.onSelect13,onRemove:this.onRemove13,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outassistant Surgeon"),c.a.createElement(g.a,{options:this.state.Outassistant_surgeonList,selectedValues:this.state.Outassistant_surgeonArr,onSelect:this.onSelect14,onRemove:this.onRemove14,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outdoctors Nonsurgical"),c.a.createElement(g.a,{options:this.state.Outdoctors_nonsurgicalList,selectedValues:this.state.Outdoctors_nonsurgicalArr,onSelect:this.onSelect15,onRemove:this.onRemove15,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outdiagnostic_xray"),c.a.createElement(g.a,{options:this.state.Outdiagnostic_xrayList,selectedValues:this.state.Outdiagnostic_xrayArr,onSelect:this.onSelect16,onRemove:this.onRemove16,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outcat Scan"),c.a.createElement(g.a,{options:this.state.Outcat_scanList,selectedValues:this.state.Outcat_scanArr,onSelect:this.onSelect17,onRemove:this.onRemove17,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"},"Outhostpital Emergency"),c.a.createElement(g.a,{options:this.state.Outhostpital_emergencyList,selectedValues:this.state.Outhostpital_emergencyArr,onSelect:this.onSelect18,onRemove:this.onRemove18,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"}," Outprescription Drugs"),c.a.createElement(g.a,{options:this.state.Outprescription_drugsList,selectedValues:this.state.Outprescription_drugsArr,onSelect:this.onSelect19,onRemove:this.onRemove19,displayValue:"name"})),c.a.createElement(p.a,{className:"mt-1",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{for:"data-category"}," Outambulance_services"),c.a.createElement(g.a,{options:this.state.Outambulance_servicesList,selectedValues:this.state.Outambulance_servicesArr,onSelect:this.onSelect20,onRemove:this.onRemove20,displayValue:"name"})),c.a.createElement(p.a,{lg:"6",md:"6",sm:"12",className:"mt-1"},c.a.createElement(E.a,{for:"data-category"},"Policy"),c.a.createElement(d.a,null,c.a.createElement(O.a,{type:"select",id:"data-category",name:"policyName",value:this.state.policy,onChange:this.handlePlanBenefits,defaultValue:""},c.a.createElement("option",{disabled:!0,value:""},"Select Policy"),null===(e=this.state.policyList)||void 0===e?void 0:e.map((function(e){return c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.policyName)})))))),c.a.createElement(m.a,null,c.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(S.a.Ripple,{color:"primary",type:"submit",className:" my-2 mr-1 mb-1"},"Submit")))))))}}]),a}(c.a.Component);t.default=b}}]);
//# sourceMappingURL=197.9c53db13.chunk.js.map