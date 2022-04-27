import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import Device from "sap/ui/Device";
import Message from "sap/ui/core/Message";
import ControlMessageProcessor from "sap/ui/core/message/ControlMessageProcessor";
/**
 * @namespace ch.coop.starter.controller
 */
export default class Next extends BaseController {
    oModel: JSONModel;
    oSemanticPage: import("sap/ui/core/Element").default;

        
    private get_Model() {
        return
    }

    public onInit(): void {
        // apply content density mode to root view
        this.oModel = new JSONModel(null, true);
        this.oModel.loadData(sap.ui.require.toUrl("ch/coop/starter/model/crud.json"), null, false);
        this.oSemanticPage = this.byId("mySemanticPage");
        debugger;
        this.oSemanticPage.setModel(this.oModel);


    }

    public add(): void {
        debugger;
        var newItem = {
            "ProductId": "1239104",
            "Name": "Power Projector 4713",
            "Category": "Projector",
            "SupplierName": "Titanium"
        };
        let model = this.oModel.getProperty("/ProductCollection")
        this.oModel.setProperty("/ProductCollection", this.oModel.getProperty("/ProductCollection").concat(newItem));
        debugger;

    }



}
