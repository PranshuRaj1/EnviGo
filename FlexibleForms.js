import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Color, Padding, FontFamily, FontSize, Border } from "./GlobalStyles";

const FlexibleForms = () => {
  return (
    <View style={styles.flexibleForms}>
      <View style={[styles.bg, styles.bgPosition]} />
      <View style={[styles.formBg, styles.bgPosition]} />
      <View style={[styles.form, styles.radioLayout]}>
        <View style={styles.username}>
          <Text style={styles.inputTextLabel}>Username</Text>
          <View style={[styles.inputField, styles.optionBorder]}>
            <View style={styles.text}>
              <Text style={[styles.typeHere, styles.assistiveTypo]}>
                Enter username
              </Text>
            </View>
          </View>
          <Text style={[styles.assistiveText, styles.assistiveTypo]}>
            Your password is between 4 and 12 characters
          </Text>
        </View>
        <View style={styles.ctaSpaceBlock}>
          <Text style={styles.inputTextLabel}>Password</Text>
          <View style={[styles.inputField, styles.optionBorder]}>
            <View style={styles.text}>
              <Text style={[styles.typeHere, styles.assistiveTypo]}>
                Enter password
              </Text>
            </View>
          </View>
          <Text style={[styles.assistiveText1, styles.assistiveTypo]}>
            Your password is between 4 and 12 characters
          </Text>
        </View>
        <View style={styles.ctaSpaceBlock}>
          <Text style={styles.inputTextLabel}>Input Text Label</Text>
          <View style={[styles.inputField2, styles.inputLayout]}>
            <View style={styles.text}>
              <Text style={[styles.typing, styles.typingTypo]}>Typing |</Text>
            </View>
          </View>
          <Text style={[styles.errorMessageInforming, styles.assistiveTypo]}>
            Error message informing me of a problem
          </Text>
        </View>
        <View style={[styles.checkbox, styles.ctaSpaceBlock]}>
          <Text style={[styles.unchecked, styles.offTypo]}>Remember me</Text>
        </View>
        <View style={[styles.checkbox, styles.ctaSpaceBlock]}>
          <View style={styles.toggleOff}>
            <View style={[styles.toggle1, styles.radio1Border]} />
            <View style={styles.dot} />
          </View>
          <Text style={[styles.off, styles.offTypo]}>Off</Text>
        </View>
        <View style={[styles.radioButtons, styles.ctaSpaceBlock]}>
          <View style={[styles.radioButton, styles.radioLayout]}>
            <View style={[styles.checkboxIcon, styles.iconLayout1]}>
              <View style={[styles.radio1, styles.radio1Border]} />
              <View style={[styles.dot1, styles.dotLayout]} />
            </View>
            <Text style={[styles.unchecked, styles.offTypo]}>
              Radio selection 1
            </Text>
          </View>
          <View style={[styles.radioButton1, styles.radioLayout]}>
            <View style={[styles.checkboxIcon, styles.iconLayout1]}>
              <View style={[styles.radio1, styles.radio1Border]} />
              <View style={styles.dotLayout} />
            </View>
            <Text style={[styles.unchecked, styles.offTypo]}>
              Radio selection 2
            </Text>
          </View>
          <View style={[styles.radioButton2, styles.radioLayout]}>
            <View style={[styles.checkboxIcon, styles.iconLayout1]}>
              <View style={[styles.radio1, styles.radio1Border]} />
              <View style={[styles.dot1, styles.dotLayout]} />
            </View>
            <Text style={[styles.unchecked, styles.offTypo]}>
              Radio selection 3
            </Text>
          </View>
        </View>
        <View style={[styles.dropdowns, styles.ctaSpaceBlock]}>
          <Text style={styles.inputTextLabel}>Dropdown Title</Text>
          <View style={styles.username}>
            <View style={[styles.inputField3, styles.inputBorder]}>
              <View style={styles.text3}>
                <Text style={[styles.dropdownOption, styles.typingTypo]}>
                  Dropdown option
                </Text>
              </View>
            </View>
            <View style={[styles.option, styles.optionBorder]}>
              <View style={styles.text3}>
                <Text style={[styles.dropdownOption1, styles.assistiveTypo]}>
                  Dropdown option
                </Text>
              </View>
            </View>
            <View style={[styles.option1, styles.optionBorder]}>
              <View style={styles.text3}>
                <Text style={[styles.dropdownOption11, styles.assistiveTypo]}>
                  Dropdown option 1
                </Text>
              </View>
            </View>
            <View style={[styles.option2, styles.optionBorder]}>
              <View style={styles.text3}>
                <Text style={[styles.dropdownOption11, styles.assistiveTypo]}>
                  Dropdown option 2
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.textInputs1, styles.ctaSpaceBlock]}>
          <Text style={styles.inputTextLabel}>Input Text Label</Text>
          <View style={[styles.inputField4, styles.inputBorder]}>
            <View style={styles.text}>
              <Text style={[styles.typing, styles.typingTypo]}>Typing |</Text>
            </View>
          </View>
          <Text style={[styles.assistiveText1, styles.assistiveTypo]}>
            Assistive Text
          </Text>
        </View>
        <View style={[styles.cta, styles.ctaSpaceBlock]}>
          <View style={[styles.buttons, styles.inputBorder]}>
            <View style={styles.text}>
              <Text style={[styles.clear, styles.goTypo]}>Cancel</Text>
            </View>
          </View>
          <View style={styles.buttons1}>
            <View style={styles.text}>
              <Text style={[styles.go, styles.goTypo]}>Next</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    position: "absolute",
    top: 0,
    height: 1200,
  },
  radioLayout: {
    width: 564,
    position: "absolute",
  },
  optionBorder: {
    borderColor: Color.colorLightgray,
    padding: Padding.p_base,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  assistiveTypo: {
    fontFamily: FontFamily.notoSansRegular,
    textAlign: "left",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  inputLayout: {
    borderWidth: 2,
    alignSelf: "stretch",
  },
  typingTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  ctaSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  offTypo: {
    marginLeft: 16,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDimgray,
  },
  radio1Border: {
    height: 25,
    borderRadius: Border.br_13xl,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.wBackground,
  },
  dotLayout: {
    height: 12,
    width: 12,
    left: 6,
    top: 6,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.keatextPurple,
    position: "absolute",
  },
  inputBorder: {
    borderColor: Color.keatextPurple,
    padding: Padding.p_base,
    borderStyle: "solid",
    backgroundColor: Color.wBackground,
  },
  iconLayout: {
    marginLeft: 8,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  goTypo: {
    width: 140,
    textAlign: "center",
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  bg: {
    width: 1600,
    opacity: 0.2,
    backgroundColor: Color.keatextPurple,
    left: 0,
    top: 0,
  },
  formBg: {
    left: 420,
    width: 760,
    top: 0,
    backgroundColor: Color.wBackground,
  },
  inputTextLabel: {
    fontWeight: "600",
    fontFamily: FontFamily.notoSansSemiBold,
    textAlign: "left",
    color: Color.colorDimgray,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  typeHere: {
    width: 304,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorDimgray,
  },
  icon: {
    opacity: 0,
    height: 24,
    overflow: "hidden",
  },
  text: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  inputField: {
    marginTop: 8,
    padding: Padding.p_base,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.wBackground,
  },
  assistiveText: {
    display: "none",
    marginTop: 8,
    color: Color.colorDimgray,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  username: {
    alignSelf: "stretch",
  },
  assistiveText1: {
    marginTop: 8,
    color: Color.colorDimgray,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  typing: {
    width: 304,
  },
  icon2: {
    height: 24,
    overflow: "hidden",
  },
  inputField2: {
    borderColor: Color.red,
    marginTop: 8,
    padding: Padding.p_base,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.wBackground,
  },
  errorMessageInforming: {
    color: Color.red,
    marginTop: 8,
    fontFamily: FontFamily.notoSansRegular,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  checkboxIcon: {
    height: 24,
  },
  unchecked: {
    flex: 1,
  },
  checkbox: {
    flexDirection: "row",
  },
  toggle1: {
    width: 50,
  },
  dot: {
    top: 3,
    left: 28,
    backgroundColor: Color.f4,
    width: 19,
    height: 19,
    borderRadius: Border.br_13xl,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    position: "absolute",
  },
  toggleOff: {
    width: 49,
    height: 24,
  },
  off: {
    width: 303,
  },
  radio1: {
    width: 25,
  },
  dot1: {
    display: "none",
  },
  radioButton: {
    flexDirection: "row",
    left: 0,
    top: 0,
  },
  radioButton1: {
    top: 56,
    flexDirection: "row",
    left: 0,
  },
  radioButton2: {
    top: 112,
    flexDirection: "row",
    left: 0,
  },
  radioButtons: {
    height: 136,
  },
  dropdownOption: {
    flex: 1,
  },
  text3: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  inputField3: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 58,
    borderWidth: 2,
    alignSelf: "stretch",
  },
  dropdownOption1: {
    color: Color.wBackground,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansRegular,
    flex: 1,
  },
  icon4: {
    opacity: 0,
  },
  option: {
    padding: Padding.p_base,
    borderWidth: 1,
    backgroundColor: Color.keatextPurple,
  },
  dropdownOption11: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorDimgray,
    flex: 1,
  },
  option1: {
    padding: Padding.p_base,
    borderWidth: 1,
    backgroundColor: Color.wBackground,
  },
  option2: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    padding: Padding.p_base,
    borderWidth: 1,
    backgroundColor: Color.wBackground,
  },
  dropdowns: {
    justifyContent: "space-between",
  },
  inputField4: {
    borderWidth: 2,
    alignSelf: "stretch",
    marginTop: 8,
    borderRadius: Border.br_5xs,
  },
  textInputs1: {
    display: "none",
  },
  clear: {
    color: Color.keatextPurple,
  },
  buttons: {
    borderWidth: 1,
    borderRadius: Border.br_5xs,
  },
  go: {
    color: Color.wBackground,
  },
  buttons1: {
    padding: Padding.p_base,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.keatextPurple,
  },
  cta: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  form: {
    top: 96,
    left: 518,
    alignItems: "center",
    justifyContent: "center",
  },
  flexibleForms: {
    width: "100%",
    overflow: "hidden",
    height: 1200,
    flex: 1,
    backgroundColor: Color.wBackground,
  },
});

export default FlexibleForms;
