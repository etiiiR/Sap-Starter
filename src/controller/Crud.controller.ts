import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
/**
 * @namespace ch.coop.starter.controller
 */
export default class Next extends BaseController {

	public previousPage() : void {
        this.onNavBack()
	}


}
