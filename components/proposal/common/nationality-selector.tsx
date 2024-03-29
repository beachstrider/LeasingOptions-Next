﻿import React from 'react';
import { useFormContext } from "react-hook-form";
import { getFieldName, getFieldError, getFieldId } from 'helpers/fieldArrayHelper'

const NationalitySelector = ({ collectionName, index, defaultValue }) => {

    const { register, errors } = useFormContext();

    const fieldError = () => {
        return getFieldError("nationalityId", collectionName, index, errors);
    }

    return (
        <div className="form-row mb-3">
            <div className="col-24 col-md-12 col-lg-6">
                <label>Nationality <small>(Required)</small></label>
                <select className={`form-control ${fieldError() ? "is-invalid" : ""}`}
                    name={getFieldName("nationalityId", collectionName, index)}
                    ref={register({ required: true })}
                    defaultValue={defaultValue}>
                    <option value="">Please select...</option>
                    <option value="27">British</option>
                    <option value="1">Afghan</option>
                    <option value="2">Albanian</option>
                    <option value="3">Algerian</option>
                    <option value="4">American</option>
                    <option value="5">Andorran</option>
                    <option value="6">Angolan</option>
                    <option value="7">Antiguans</option>
                    <option value="8">Argentinean</option>
                    <option value="9">Armenian</option>
                    <option value="10">Australian</option>
                    <option value="11">Austrian</option>
                    <option value="12">Azerbaijani</option>
                    <option value="13">Bahamian</option>
                    <option value="14">Bahraini</option>
                    <option value="15">Bangladeshi</option>
                    <option value="16">Barbadian</option>
                    <option value="17">Barbudans</option>
                    <option value="18">Batswana</option>
                    <option value="19">Belarusian</option>
                    <option value="20">Belgian</option>
                    <option value="21">Belizean</option>
                    <option value="22">Beninese</option>
                    <option value="23">Bhutanese</option>
                    <option value="24">Bolivian</option>
                    <option value="25">Bosnian</option>
                    <option value="26">Brazilian</option>
                    <option value="28">Bruneian</option>
                    <option value="29">Bulgarian</option>
                    <option value="30">Burkinabe</option>
                    <option value="31">Burmese</option>
                    <option value="32">Burundian</option>
                    <option value="33">Cambodian</option>
                    <option value="34">Cameroonian</option>
                    <option value="35">Canadian</option>
                    <option value="36">Cape Verdean</option>
                    <option value="37">Central African</option>
                    <option value="38">Chadian</option>
                    <option value="39">Chilean</option>
                    <option value="40">Chinese</option>
                    <option value="41">Colombian</option>
                    <option value="42">Comoran</option>
                    <option value="43">Congolese</option>
                    <option value="44">Costa Rican</option>
                    <option value="45">Croatian</option>
                    <option value="46">Cuban</option>
                    <option value="47">Cypriot</option>
                    <option value="48">Czech</option>
                    <option value="49">Danish</option>
                    <option value="50">Djibouti</option>
                    <option value="51">Dominican</option>
                    <option value="52">Dutch</option>
                    <option value="53">Dutchman</option>
                    <option value="54">Dutchwoman</option>
                    <option value="55">East Timorese</option>
                    <option value="56">Ecuadorean</option>
                    <option value="57">Egyptian</option>
                    <option value="58">Emirian</option>
                    <option value="59">Equatorial Guinean</option>
                    <option value="60">Eritrean</option>
                    <option value="61">Estonian</option>
                    <option value="62">Ethiopian</option>
                    <option value="63">Fijian</option>
                    <option value="64">Filipino</option>
                    <option value="65">Finnish</option>
                    <option value="66">French</option>
                    <option value="67">Gabonese</option>
                    <option value="68">Gambian</option>
                    <option value="69">Georgian</option>
                    <option value="70">German</option>
                    <option value="71">Ghanaian</option>
                    <option value="72">Greek</option>
                    <option value="73">Grenadian</option>
                    <option value="74">Guatemalan</option>
                    <option value="75">Guinea Bissauan</option>
                    <option value="76">Guinean</option>
                    <option value="77">Guyanese</option>
                    <option value="78">Haitian</option>
                    <option value="79">Herzegovinian</option>
                    <option value="80">Honduran</option>
                    <option value="81">Hungarian</option>
                    <option value="82">Icelander</option>
                    <option value="83">IKiribati</option>
                    <option value="84">Indian</option>
                    <option value="85">Indonesian</option>
                    <option value="86">Iranian</option>
                    <option value="87">Iraqi</option>
                    <option value="88">Irish</option>
                    <option value="89">Israeli</option>
                    <option value="90">Italian</option>
                    <option value="91">Ivorian</option>
                    <option value="92">Jamaican</option>
                    <option value="93">Japanese</option>
                    <option value="94">Jordanian</option>
                    <option value="95">Kazakhstani</option>
                    <option value="96">Kenyan</option>
                    <option value="97">Kittian And Nevisian</option>
                    <option value="98">Kuwaiti</option>
                    <option value="99">Kyrgyz</option>
                    <option value="100">Laotian</option>
                    <option value="101">Latvian</option>
                    <option value="102">Lebanese</option>
                    <option value="103">Liberian</option>
                    <option value="104">Libyan</option>
                    <option value="105">Liechtensteiner</option>
                    <option value="106">Lithuanian</option>
                    <option value="107">Luxembourger</option>
                    <option value="108">Macedonian</option>
                    <option value="109">Malagasy</option>
                    <option value="110">Malawian</option>
                    <option value="111">Malaysian</option>
                    <option value="112">Maldivan</option>
                    <option value="113">Malian</option>
                    <option value="114">Maltese</option>
                    <option value="115">Marshallese</option>
                    <option value="116">Mauritanian</option>
                    <option value="117">Mauritian</option>
                    <option value="118">Mexican</option>
                    <option value="119">Micronesian</option>
                    <option value="120">Moldovan</option>
                    <option value="121">Monacan</option>
                    <option value="122">Mongolian</option>
                    <option value="123">Moroccan</option>
                    <option value="124">Mosotho</option>
                    <option value="125">Motswana</option>
                    <option value="126">Mozambican</option>
                    <option value="127">Namibian</option>
                    <option value="128">Nauruan</option>
                    <option value="129">Nepalese</option>
                    <option value="130">Netherlander</option>
                    <option value="131">New Zealander</option>
                    <option value="132">Nicaraguan</option>
                    <option value="133">Nigerian</option>
                    <option value="134">Nigerien</option>
                    <option value="135">Ni Vanuatu</option>
                    <option value="136">North Korean</option>
                    <option value="137">Northern Irish</option>
                    <option value="138">Norwegian</option>
                    <option value="139">Omani</option>
                    <option value="140">Pakistani</option>
                    <option value="141">Palauan</option>
                    <option value="142">Panamanian</option>
                    <option value="143">Papua New Guinean</option>
                    <option value="144">Paraguayan</option>
                    <option value="145">Peruvian</option>
                    <option value="146">Polish</option>
                    <option value="147">Portuguese</option>
                    <option value="148">Qatari</option>
                    <option value="149">Romanian</option>
                    <option value="150">Russian</option>
                    <option value="151">Rwandan</option>
                    <option value="152">Saint Lucian</option>
                    <option value="153">Salvadoran</option>
                    <option value="154">Samoan</option>
                    <option value="155">San Marinese</option>
                    <option value="156">Sao Tomean</option>
                    <option value="157">Saudi</option>
                    <option value="158">Scottish</option>
                    <option value="159">Senegalese</option>
                    <option value="160">Serbian</option>
                    <option value="161">Seychellois</option>
                    <option value="162">Sierra Leonean</option>
                    <option value="163">Singaporean</option>
                    <option value="164">Slovakian</option>
                    <option value="165">Slovenian</option>
                    <option value="166">Solomon Islander</option>
                    <option value="167">Somali</option>
                    <option value="168">South African</option>
                    <option value="169">South Korean</option>
                    <option value="170">Spanish</option>
                    <option value="171">Sri Lankan</option>
                    <option value="172">Sudanese</option>
                    <option value="173">Surinamer</option>
                    <option value="174">Swazi</option>
                    <option value="175">Swedish</option>
                    <option value="176">Swiss</option>
                    <option value="177">Syrian</option>
                    <option value="178">Taiwanese</option>
                    <option value="179">Tajik</option>
                    <option value="180">Tanzanian</option>
                    <option value="181">Thai</option>
                    <option value="182">Togolese</option>
                    <option value="183">Tongan</option>
                    <option value="184">Trinidadian Or Tobagonian</option>
                    <option value="185">Tunisian</option>
                    <option value="186">Turkish</option>
                    <option value="187">Tuvaluan</option>
                    <option value="188">Ugandan</option>
                    <option value="189">Ukrainian</option>
                    <option value="190">Uruguayan</option>
                    <option value="191">Uzbekistanian</option>
                    <option value="192">Venezuelan</option>
                    <option value="193">Vietnamese</option>
                    <option value="194">Welsh</option>
                    <option value="195">Yemenite</option>
                    <option value="196">Zambian</option>
                    <option value="197">Zimbabwean</option>
                </select>
                {fieldError() && <span className="invalid-feedback d-block">This field is required</span>}
            </div>
        </div>
    )
}

export default NationalitySelector