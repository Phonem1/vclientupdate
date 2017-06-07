import { PersonalComponent } from './personal/personal.component';
//import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { WorkComponent } from './work/work.component';
import { ResultComponent } from './result/result.component';
import { WorkflowService } from './workflow/workflow.service';
import { Transition } from '@uirouter/angular';


export const PersonalState = { name:'personal', url: '/personal', component: PersonalComponent};
//export const AboutState = { name:'about', url: '/about', component: AboutComponent,  onEnter: verifyWorkFlow };
export const WorkState = { name:'work', url: '/work', component: WorkComponent , onEnter: verifyWorkFlow };
export const AddressState = { name:'address', url: '/address', component: AddressComponent, onEnter: verifyWorkFlow };
export const ResultState = { name:'result', url: '/result', component: ResultComponent, onEnter: verifyWorkFlow };

export function verifyWorkFlow(transition : Transition, state : any) {
    console.log("Entered '" + state.name + "' state.");
    const $stateService = transition.router.stateService;
    const workflowService = transition.injector().get(WorkflowService);
    // If any of the previous steps is invalid, go back to the first invalid step
    let firstState = workflowService.getFirstInvalidStep(state.name);
    if (firstState.length > 0) {
        console.log("Redirected to '" + firstState + "' state which it is the first invalid step.");
        return $stateService.target(firstState);
    };
}

export const APP_STATES =  [
    PersonalState,
    WorkState,
    AddressState,
    ResultState
];



