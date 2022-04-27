import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace ch.coop.starter.controller
 */
export default class Main extends BaseController {


	public routeNextPage() : void {
		debugger;
		const router = this.getRouter()
		router.navTo('next')

	}


	public routeToCrud() : void {
		debugger;
		const router = this.getRouter()
		router.navTo('crud')

	}

}
