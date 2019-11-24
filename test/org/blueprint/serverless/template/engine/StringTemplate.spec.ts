import {expect} from 'chai';
import 'mocha';
import {StringTemplate} from "../../../../../../src/org/blueprint/serverless/template/engine/StringTemplate";

describe('String Template', () => {

    it('should return blank output given an empty string template', () => {
        let stringTemplate = new StringTemplate("");
        let merged: string = stringTemplate.mergeWith({});
        expect(merged).to.equal("");
    });

    it('should return an output which is same as input given no placeholders in the template', () => {
        let stringTemplate = new StringTemplate("serverless-blueprint");
        let merged: string = stringTemplate.mergeWith({});
        expect(merged).to.equal("serverless-blueprint");
    });

});