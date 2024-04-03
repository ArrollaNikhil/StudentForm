import { Component } from "react";
import "./index.css";

class StudentForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    middleName: "",
    studentNumber: "",
    studentYear: "PleaseSelect",
    studentCourse: "PleaseSelect",
    studentEmail: "",
    studentMobileNumber: "",
    studentMobileNetwork: "PleaseSelect",
    birthDay: "PleaseSelect",
    birthMonth: "PleaseSelect",
    birthYear: "PleaseSelect",
    presentStreetAddress: "",
    presentStreetAddressLine: "",
    presentCity: "",
    presentState: "",
    presentPostal: "",
    presentCountry: "",
    checkBox: false,
    showFirstErrorMessage: false,
    showLastErrorMessage: false,
    showMiddleErrorMessage: false,
    showStudentNumberErrorMessage: false,
    showStudentYearErrorMessage: false,
    showStudentCourseErrorMessage: false,
    showStudentEmailErrorMessage: false,
    showStudentMobileNumberErrorMessage: false,
    showStudentMobileNetworkErrorMessage: false,
    showBirthDayErrorMessage: false,
    showBirthMonthErrorMessage: false,
    showBirthYearErrorMessage: false,
    showPresentStreetAddressErrorMessage: false,
    showPresentStreetAddressLineErrorMessage: false,
    showPresentStateErrorMessage: false,
    showPresentCityErrorMessage: false,
    showPresentCountryErrorMessage: false,
    showPresentPostalErrorMessage: false,
    showCheckboxErrorMessage: false,
    isSubmit: false,
  };
  onClickSubmit = () => {
    this.setState({
      firstName: "",
      lastName: "",
      middleName: "",
      studentNumber: "",
      studentYear: "PleaseSelect",
      studentCourse: "PleaseSelect",
      studentEmail: "",
      studentMobileNumber: "",
      studentMobileNetwork: "PleaseSelect",
      birthDay: "PleaseSelect",
      birthMonth: "PleaseSelect",
      birthYear: "PleaseSelect",
      presentStreetAddress: "",
      presentStreetAddressLine: "",
      presentCity: "",
      presentState: "",
      presentPostal: "",
      presentCountry: "",
      checkBox: false,
      isSubmit: false,
      showFirstErrorMessage: false,
      showLastErrorMessage: false,
      showMiddleErrorMessage: false,
      showStudentNumberErrorMessage: false,
      showStudentYearErrorMessage: false,
      showStudentCourseErrorMessage: false,
      showStudentEmailErrorMessage: false,
      showStudentMobileNumberErrorMessage: false,
      showStudentMobileNetworkErrorMessage: false,
      showBirthDayErrorMessage: false,
      showBirthMonthErrorMessage: false,
      showBirthYearErrorMessage: false,
      showPresentStreetAddressErrorMessage: false,
      showPresentStreetAddressLineErrorMessage: false,
      showPresentStateErrorMessage: false,
      showPresentCityErrorMessage: false,
      showPresentCountryErrorMessage: false,
      showPresentPostalErrorMessage: false,
      showCheckboxErrorMessage: false,
    });
  };

  onChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  onChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  onChangeMiddleName = (event) => {
    this.setState({ middleName: event.target.value });
  };

  onChangeStudentNumber = (event) => {
    this.setState({ studentNumber: event.target.value });
  };

  onChangeStudentYear = (event) => {
    this.setState({ studentYear: event.target.value });
  };

  onChangeStudentCourse = (event) => {
    this.setState({ studentCourse: event.target.value });
  };

  onChangeStudentEmail = (event) => {
    this.setState({ studentEmail: event.target.value });
  };

  onChangeStudentMobileNetwork = (event) => {
    this.setState({ studentMobileNetwork: event.target.value });
  };

  onChangeStudentMobileNumber = (event) => {
    this.setState({ studentMobileNumber: event.target.value });
  };

  onChangeBirthDay = (event) => {
    this.setState({ birthDay: event.target.value });
  };

  onChangeBirthMonth = (event) => {
    this.setState({ birthMonth: event.target.value });
  };

  onChangeBirthYear = (event) => {
    this.setState({ birthYear: event.target.value });
  };

  onChangePresentStreetAddress = (event) => {
    this.setState({ presentStreetAddress: event.target.value });
  };

  onChangePresentStreetAddressLine = (event) => {
    this.setState({ presentStreetAddressLine: event.target.value });
  };

  onChangePresentCity = (event) => {
    this.setState({ presentCity: event.target.value });
  };

  onChangePresentState = (event) => {
    this.setState({ presentState: event.target.value });
  };

  onChangePresentPostal = (event) => {
    this.setState({ presentPostal: event.target.value });
  };

  onChangePresentCountry = (event) => {
    this.setState({ presentCountry: event.target.value });
  };

  onChangeCheckBox = (event) => {
    const { checkBox } = this.state;
    this.setState({ checkBox: !checkBox });
  };

  onBlurFirstName = () => {
    const validateFirstName = this.validateFirstName();
    this.setState({ showFirstErrorMessage: !validateFirstName });
  };

  onBlurLastName = () => {
    const validateLastName = this.validateLastName();
    this.setState({ showLastErrorMessage: !validateLastName });
  };

  onBlurMiddleName = () => {
    const validateMiddleName = this.validateMiddleName();
    this.setState({ showMiddleErrorMessage: !validateMiddleName });
  };

  onBlurStudentNumber = () => {
    const validateStudentNumber = this.validateStudentNumber();
    this.setState({ showStudentNumberErrorMessage: !validateStudentNumber });
  };

  onBlurStudentYear = () => {
    const validateStudentYear = this.validateStudentYear();
    this.setState({ showStudentYearErrorMessage: !validateStudentYear });
  };

  onBlurStudentCourse = () => {
    const validateStudentCourse = this.validateStudentCourse();
    this.setState({ showStudentCourseErrorMessage: !validateStudentCourse });
  };

  onBlurStudentEmail = () => {
    const validateStudentEmail = this.validateStudentEmail();
    this.setState({ showStudentEmailErrorMessage: !validateStudentEmail });
  };

  onBlurStudentMobileNumber = () => {
    const validateStudentMobileNumber = this.validateStudentMobileNumber();
    this.setState({
      showStudentMobileNumberErrorMessage: !validateStudentMobileNumber,
    });
  };

  onBlurStudentMobileNetwork = () => {
    const validateStudentMobileNetwork = this.validateStudentMobileNetwork();
    this.setState({
      showStudentMobileNetworkErrorMessage: !validateStudentMobileNetwork,
    });
  };

  onBlurBirthDay = () => {
    const validateBirthDay = this.validateBirthDay();
    this.setState({ showBirthDayErrorMessage: !validateBirthDay });
  };

  onBlurBirthMonth = () => {
    const validateBirthMonth = this.validateBirthMonth();
    this.setState({ showBirthMonthErrorMessage: !validateBirthMonth });
  };

  onBlurBirthYear = () => {
    const validateBirthYear = this.validateBirthYear();
    this.setState({ showBirthYearErrorMessage: !validateBirthYear });
  };

  onBlurPresentStreetAddress = () => {
    const validatePresentStreetAddress = this.validatePresentStreetAddress();
    this.setState({
      showPresentStreetAddressErrorMessage: !validatePresentStreetAddress,
    });
  };

  onBlurPresentStreetAddressLine = () => {
    const validatePresentStreetAddressLine = this.validatePresentStreetAddressLine();
    this.setState({
      showPresentStreetAddressLineErrorMessage: !validatePresentStreetAddressLine,
    });
  };

  onBlurPresentState = () => {
    const validatePresentState = this.validatePresentState();
    this.setState({
      showPresentStateErrorMessage: !validatePresentState,
    });
  };

  onBlurPresentCity = () => {
    const validatePresentCity = this.validatePresentCity();
    this.setState({
      showPresentCityErrorMessage: !validatePresentCity,
    });
  };

  onBlurPresentPostal = () => {
    const validatePresentPostal = this.validatePresentPostal();
    this.setState({
      showPresentPostalErrorMessage: !validatePresentPostal,
    });
  };

  onBlurPresentCountry = () => {
    const validatePresentCountry = this.validatePresentCountry();
    this.setState({
      showPresentCountryErrorMessage: !validatePresentCountry,
    });
  };

  validateFirstName = () => {
    const { firstName } = this.state;
    return firstName !== "";
  };

  validateLastName = () => {
    const { lastName } = this.state;
    return lastName !== "";
  };

  validateMiddleName = () => {
    const { middleName } = this.state;
    return middleName !== "";
  };

  validateStudentNumber = () => {
    const { studentNumber } = this.state;
    return studentNumber !== "";
  };

  validateStudentYear = () => {
    const { studentYear } = this.state;
    return studentYear !== "PleaseSelect";
  };

  validateStudentEmail = () => {
    const { studentEmail } = this.state;
    return studentEmail !== "";
  };

  validateStudentCourse = () => {
    const { studentCourse } = this.state;
    return studentCourse !== "PleaseSelect";
  };

  validateStudentMobileNetwork = () => {
    const { studentMobileNetwork } = this.state;
    return studentMobileNetwork !== "PleaseSelect";
  };

  validateStudentMobileNumber = () => {
    const { studentMobileNumber } = this.state;
    return studentMobileNumber !== "";
  };

  validateBirthDay = () => {
    const { birthDay } = this.state;
    return birthDay !== "PleaseSelect";
  };

  validateBirthMonth = () => {
    const { birthMonth } = this.state;
    return birthMonth !== "PleaseSelect";
  };

  validateBirthYear = () => {
    const { birthYear } = this.state;
    return birthYear !== "PleaseSelect";
  };

  validatePresentStreetAddress = () => {
    const { presentStreetAddress } = this.state;
    return presentStreetAddress !== "";
  };

  validatePresentStreetAddressLine = () => {
    const { presentStreetAddressLine } = this.state;
    return presentStreetAddressLine !== "";
  };

  validatePresentCity = () => {
    const { presentCity } = this.state;
    return presentCity !== "";
  };

  validatePresentState = () => {
    const { presentState } = this.state;
    return presentState !== "";
  };

  validatePresentCountry = () => {
    const { presentCountry } = this.state;
    return presentCountry !== "";
  };

  validatePresentPostal = () => {
    const { presentPostal } = this.state;
    return presentPostal !== "";
  };

  validateCheckBox = () => {
    const { checkBox } = this.state;
    return checkBox !== false;
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const validateFirstName = this.validateFirstName();
    const validateLastName = this.validateLastName();
    const validateMiddleName = this.validateMiddleName();
    const validateStudentNumber = this.validateStudentNumber();
    const validateStudentYear = this.validateStudentYear();
    const validateStudentEmail = this.validateStudentEmail();
    const validateStudentCourse = this.validateStudentCourse();
    const validateStudentMobileNetwork = this.validateStudentMobileNetwork();
    const validateStudentMobileNumber = this.validateStudentMobileNumber();
    const validateBirthDay = this.validateBirthDay();
    const validateBirthMonth = this.validateBirthMonth();
    const validateBirthYear = this.validateBirthYear();
    const validatePresentStreetAddress = this.validatePresentStreetAddress();
    const validatePresentStreetAddressLine = this.validatePresentStreetAddressLine();
    const validatePresentCity = this.validatePresentCity();
    const validatePresentState = this.validatePresentState();
    const validatePresentCountry = this.validatePresentCountry();
    const validatePresentPostal = this.validatePresentPostal();
    const validateCheckBox = this.validateCheckBox();

    if (
      validateFirstName &&
      validateLastName &&
      validateMiddleName &&
      validateStudentNumber &&
      validateStudentYear &&
      validateStudentEmail &&
      validateStudentCourse &&
      validateStudentMobileNumber &&
      validateStudentMobileNetwork &&
      validateBirthDay &&
      validateBirthMonth &&
      validateBirthYear &&
      validatePresentStreetAddress &&
      validatePresentStreetAddressLine &&
      validatePresentCity &&
      validatePresentState &&
      validatePresentCountry &&
      validatePresentPostal &&
      validateCheckBox
    ) {
      this.setState((prevState) => ({ isSubmit: !prevState.isSubmit }));
    } else {
      this.setState({
        showFirstErrorMessage: !validateFirstName,
        showLastErrorMessage: !validateLastName,
        showMiddleErrorMessage: !validateMiddleName,
        showStudentNumberErrorMessage: !validateStudentNumber,
        showStudentYearErrorMessage: !validateStudentYear,
        showStudentCourseErrorMessage: !validateStudentCourse,
        showStudentEmailErrorMessage: !validateStudentEmail,
        showStudentMobileNetworkErrorMessage: !validateStudentMobileNetwork,
        showStudentMobileNumberErrorMessage: !validateStudentMobileNumber,
        showBirthDayErrorMessage: !validateBirthDay,
        showBirthMonthErrorMessage: !validateBirthMonth,
        showBirthYearErrorMessage: !validateBirthYear,
        showPresentStreetAddressErrorMessage: !validatePresentStreetAddress,
        showPresentStreetAddressLineErrorMessage: !validatePresentStreetAddressLine,
        showPresentCityErrorMessage: !validatePresentCity,
        showPresentStateErrorMessage: !validatePresentState,
        showPresentPostalErrorMessage: !validatePresentPostal,
        showPresentCountryErrorMessage: !validatePresentCountry,
        showCheckboxErrorMessage: !validateCheckBox,
        isSubmit: false,
      });
    }
  };

  renderLastName = () => {
    const { lastName, showLastErrorMessage } = this.state;
    const errorHighlighted = showLastErrorMessage ? "error-highlight" : "";
    return (
      <>
        <label htmlFor="lastName" className="text-label">
          LAST NAME
        </label>
        <input
          onBlur={this.onBlurLastName}
          type="text"
          id="lastName"
          value={lastName}
          onChange={this.onChangeLastName}
          placeholder="Last name"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderMiddleName = () => {
    const { middleName, showMiddleErrorMessage } = this.state;
    const errorHighlighted = showMiddleErrorMessage ? "error-highlight" : "";
    return (
      <>
        <label htmlFor="middleName" className="text-label">
          MIDDLE NAME
        </label>
        <input
          onBlur={this.onBlurMiddleName}
          type="text"
          id="middleName"
          value={middleName}
          onChange={this.onChangeMiddleName}
          placeholder="Middle name"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderFirstName = () => {
    const { firstName, showFirstErrorMessage } = this.state;
    const errorHighlighted = showFirstErrorMessage ? "error-highlight" : "";
    return (
      <>
        <label htmlFor="firstName" className="text-label">
          FIRST NAME
        </label>
        <input
          onBlur={this.onBlurFirstName}
          type="text"
          id="firstName"
          value={firstName}
          onChange={this.onChangeFirstName}
          placeholder="First name"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderStudentNumber = () => {
    const { studentNumber, showStudentNumberErrorMessage } = this.state;
    const errorHighlighted = showStudentNumberErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="studentNumber" className="text-label">
          STUDENT NUMBER
        </label>
        <input
          onBlur={this.onBlurStudentNumber}
          type="text"
          id="studentNumber"
          value={studentNumber}
          onChange={this.onChangeStudentNumber}
          placeholder="111128988"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderStudentYear = () => {
    const { studentYear, showStudentYearErrorMessage } = this.state;
    const errorHighlighted = showStudentYearErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="studentYear" className="text-label">
          STUDENT YEAR
        </label>
        <select
          onBlur={this.onBlurStudentYear}
          id="studentYear"
          value={studentYear}
          onChange={this.onChangeStudentYear}
          className={`input-element ${errorHighlighted}`}
        >
          <option value="Please Select">Please Select</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
          <option value="5th Year">5th Year</option>
        </select>
      </>
    );
  };

  renderStudentEmail = () => {
    const { studentEmail, showStudentEmailErrorMessage } = this.state;

    const errorHighlighted = showStudentEmailErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="studentEmail" className="text-label">
          STUDENT EMAIL
        </label>
        <input
          onBlur={this.onBlurStudentEmail}
          type="text"
          id="studentEmail"
          value={studentEmail}
          onChange={this.onChangeStudentEmail}
          placeholder="111128988"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderStudentCourse = () => {
    const { studentCourse, showStudentCourseErrorMessage } = this.state;
    const errorHighlighted = showStudentCourseErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="studentCourse" className="text-label">
          STUDENT COURSE
        </label>
        <select
          onBlur={this.onBlurStudentCourse}
          id="studentCourse"
          value={studentCourse}
          onChange={this.onChangeStudentCourse}
          className={`input-element ${errorHighlighted}`}
        >
          <option value="Please Select">Please Select</option>
          <option value="CSE">CSE</option>
          <option value="MEC">MEC</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="CSE-AI">CSE-AI</option>
        </select>
      </>
    );
  };

  renderStudentMobileNetwork = () => {
    const {
      studentMobileNetwork,
      showStudentMobileNetworkErrorMessage,
    } = this.state;
    const errorHighlighted = showStudentMobileNetworkErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="studentMobileNetwork" className="text-label">
          STUDENT MOBILE NETWORK
        </label>
        <select
          onBlur={this.onBlurStudentMobileNetwork}
          id="studentMobileNetwork"
          value={studentMobileNetwork}
          onChange={this.onChangeStudentMobileNetwork}
          className={`input-element ${errorHighlighted}`}
        >
          <option value="Please Select">Please Select</option>
          <option value="Airtel">Airtel</option>
          <option value="Jio">Jio</option>
          <option value="Vi">Vi</option>
          <option value="Idea">Idea</option>
          <option value="ACT">ACT</option>
        </select>
      </>
    );
  };

  renderStudentMobileNumber = () => {
    const {
      studentMobileNumber,
      showStudentMobileNumberErrorMessage,
    } = this.state;
    const errorHighlighted = showStudentMobileNumberErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="studentMobileNumber" className="text-label">
          STUDENT MOBILE NUMBER
        </label>
        <input
          onBlur={this.onBlurStudentMobileNumber}
          type="text"
          id="studentMobileNumber"
          value={studentMobileNumber}
          onChange={this.onChangeStudentMobileNumber}
          placeholder="111128988"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderBirthDay = () => {
    const { birthDay, showBirthDayErrorMessage } = this.state;
    const errorHighlighted = showBirthDayErrorMessage ? "error-highlight" : "";
    return (
      <>
        <label htmlFor="birthDay" className="text-label">
          Day
        </label>
        <select
          onBlur={this.onBlurBirthDay}
          id="birthDay"
          value={birthDay}
          onChange={this.onChangeBirthDay}
          className={`input-element ${errorHighlighted}`}
        >
          <option value="Please Select">Please Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
      </>
    );
  };

  renderBirthMonth = () => {
    const { birthMonth, showBirthMonthErrorMessage } = this.state;
    const errorHighlighted = showBirthMonthErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="birthMonth" className="text-label">
          Month
        </label>
        <select
          onBlur={this.onBlurBirthMonth}
          id="birthMonth"
          value={birthMonth}
          onChange={this.onChangeBirthMonth}
          className={`input-element ${errorHighlighted}`}
        >
          <option value="Please Select">Please Select</option>
          <option value="Jan"> Jan </option>
          <option value="Feb"> Feb </option>
          <option value="Mar"> Mar </option>
          <option value="Apr"> Apr </option>
          <option value="May"> May </option>
          <option value="Jun"> Jun </option>
          <option value="Jul"> Jul </option>
          <option value="Aug"> Aug </option>
          <option value="Sep"> Sep </option>
          <option value="Oct"> Oct </option>
          <option value="Nov"> Nov </option>
          <option value="Dec"> Dec </option>
        </select>
      </>
    );
  };

  renderBirthYear = () => {
    const { birthYear, showBirthYearErrorMessage } = this.state;
    const errorHighlighted = showBirthYearErrorMessage ? "error-highlight" : "";
    return (
      <>
        <label htmlFor="birthYear" className="text-label">
          Year
        </label>
        <select
          onBlur={this.onBlurBirthYear}
          id="birthYear"
          value={birthYear}
          onChange={this.onChangeBirthYear}
          className={`input-element ${errorHighlighted}`}
        >
          <option value="Please Select">Please Select</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </>
    );
  };

  renderPresentStreetAddress = () => {
    const {
      presentStreetAddress,
      showPresentStreetAddressErrorMessage,
    } = this.state;
    const errorHighlighted = showPresentStreetAddressErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="presentStreetAddress" className="text-label">
          Street Address
        </label>
        <input
          onBlur={this.onBlurPresentStreetAddress}
          type="text"
          id="presentStreetAddressLine"
          value={presentStreetAddress}
          onChange={this.onChangePresentStreetAddress}
          placeholder="111128988"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderPresentStreetAddressLine = () => {
    const {
      presentStreetAddressLine,
      showPresentStreetAddressLineErrorMessage,
    } = this.state;
    const errorHighlighted = showPresentStreetAddressLineErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="presentStreetAddressLine" className="text-label">
          Street Address Line 2
        </label>
        <input
          onBlur={this.onBlurPresentStreetAddressLine}
          type="text"
          id="presentStreetAddressLine"
          value={presentStreetAddressLine}
          onChange={this.onChangePresentStreetAddressLine}
          placeholder="111128988"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderPresentCity = () => {
    const { presentCity, showPresentCityErrorMessage } = this.state;
    const errorHighlighted = showPresentCityErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="presentCity" className="text-label">
          City
        </label>
        <input
          onBlur={this.onBlurPresentCity}
          type="text"
          id="presentCity"
          value={presentCity}
          onChange={this.onChangePresentCity}
          placeholder="enter city"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderPresentState = () => {
    const { presentState, showPresentStateErrorMessage } = this.state;
    const errorHighlighted = showPresentStateErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="presentState" className="text-label">
          State
        </label>
        <input
          onBlur={this.onBlurPresentState}
          type="text"
          id="presentState"
          value={presentState}
          onChange={this.onChangePresentState}
          placeholder="enter state"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderPresentPostal = () => {
    const { presentPostal, showPresentPostalErrorMessage } = this.state;
    const errorHighlighted = showPresentPostalErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="presentPostal" className="text-label">
          Postal code
        </label>
        <input
          onBlur={this.onBlurPresentPostal}
          type="text"
          id="presentPostal"
          value={presentPostal}
          onChange={this.onChangePresentPostal}
          placeholder="enter Postal"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderPresentCountry = () => {
    const { presentCountry, showPresentCountryErrorMessage } = this.state;
    const errorHighlighted = showPresentCountryErrorMessage
      ? "error-highlight"
      : "";
    return (
      <>
        <label htmlFor="presentCountry" className="text-label">
          Country
        </label>
        <input
          onBlur={this.onBlurPresentCountry}
          type="text"
          id="presentCountry"
          value={presentCountry}
          onChange={this.onChangePresentCountry}
          placeholder="enter Country"
          className={`input-element ${errorHighlighted}`}
        />
      </>
    );
  };

  renderCheckbox = () => {
    const { checkBox, showCheckboxErrorMessage } = this.state;
    const errorHighlighted = showCheckboxErrorMessage ? "error-highlight" : "";
    return (
      <>
        <input
          type="checkbox"
          id="checkBox"
          checked={checkBox}
          onChange={this.onChangeCheckBox}
          className={`checkbox ${errorHighlighted}`}
        />
        <label htmlFor="checkBox" className="check-label">
          Check all
        </label>
      </>
    );
  };

  renderRegistration = () => {
    const {
      showFirstErrorMessage,
      showMiddleErrorMessage,
      showLastErrorMessage,
      showStudentNumberErrorMessage,
      showStudentYearErrorMessage,
      showStudentCourseErrorMessage,
      showStudentEmailErrorMessage,
      showStudentMobileNumberErrorMessage,
      showStudentMobileNetworkErrorMessage,
      showBirthDayErrorMessage,
      showBirthMonthErrorMessage,
      showBirthYearErrorMessage,
      showPresentStreetAddressErrorMessage,
      showPresentStreetAddressLineErrorMessage,
      showPresentCityErrorMessage,
      showPresentStateErrorMessage,
      showPresentPostalErrorMessage,
      showPresentCountryErrorMessage,
      showCheckboxErrorMessage,
    } = this.state;
    return (
      <form onSubmit={this.onSubmitForm} className="form-container">
        <h1>Full Name</h1>
        <div className="Full-Name-Container">
          <div className="input-container-three">
            {" "}
            {this.renderFirstName()}
            {showFirstErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>

          <div className="input-container-three">
            {" "}
            {this.renderMiddleName()}
            {showMiddleErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>

          <div className="input-container-three">
            {" "}
            {this.renderLastName()}
            {showLastErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="Full-Name-Container">
          <div className="input-container">
            {" "}
            {this.renderStudentNumber()}
            {showStudentNumberErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-container">
            {" "}
            {this.renderStudentYear()}
            {showStudentYearErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="Full-Name-Container">
          <div className="input-container">
            {" "}
            {this.renderStudentCourse()}
            {showStudentCourseErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-container">
            {" "}
            {this.renderStudentEmail()}
            {showStudentEmailErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="Full-Name-Container">
          <div className="input-container">
            {" "}
            {this.renderStudentMobileNumber()}
            {showStudentMobileNumberErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-container">
            {" "}
            {this.renderStudentMobileNetwork()}
            {showStudentMobileNetworkErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <h1>Birth Date</h1>
        <div className="Full-Name-Container">
          <div className="input-container">
            {" "}
            {this.renderBirthDay()}
            {showBirthDayErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>

          <div className="input-container">
            {" "}
            {this.renderBirthMonth()}
            {showBirthMonthErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>

          <div className="input-container">
            {" "}
            {this.renderBirthYear()}
            {showBirthYearErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <h1>Present Address</h1>
        <div>
          <div className="Full-Name-Container">
            <div className="input-container-address">
              {" "}
              {this.renderPresentStreetAddress()}
              {showPresentStreetAddressErrorMessage ? (
                <p className="error-message">Required</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="Full-Name-Container">
            <div className="input-container-address">
              {" "}
              {this.renderPresentStreetAddressLine()}
              {showPresentStreetAddressLineErrorMessage ? (
                <p className="error-message">Required</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="Full-Name-Container">
            <div className="input-container-address">
              {" "}
              {this.renderPresentCity()}
              {showPresentCityErrorMessage ? (
                <p className="error-message">Required</p>
              ) : (
                ""
              )}
            </div>
            <div className="input-container-address">
              {" "}
              {this.renderPresentState()}
              {showPresentStateErrorMessage ? (
                <p className="error-message">Required</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="Full-Name-Container">
            <div className="input-container-address">
              {" "}
              {this.renderPresentPostal()}
              {showPresentPostalErrorMessage ? (
                <p className="error-message">Required</p>
              ) : (
                ""
              )}
            </div>
            <div className="input-container-address">
              {" "}
              {this.renderPresentCountry()}
              {showPresentCountryErrorMessage ? (
                <p className="error-message">Required</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="input-container-check">
            {" "}
            {this.renderCheckbox()}
            {showCheckboxErrorMessage ? (
              <p className="error-message">Required</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    );
  };

  renderSubmit = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onClickSubmit} className="submit-btn">
        Submit Another Response
      </button>
    </>
  );

  render() {
    const { isSubmit } = this.state;
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        <div className="container">
          {isSubmit ? this.renderSubmit() : this.renderRegistration()}
        </div>
      </div>
    );
  }
}

export default StudentForm;
