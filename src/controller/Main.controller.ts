import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace ch.coop.starter.controller
 */
export default class Main extends BaseController {

	public routeTo(route: string) : void {
		// Navigate to the route from the XML Event Input
		this.getRouter().navTo(route)
	}
}
