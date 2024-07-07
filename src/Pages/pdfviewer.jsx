import { Page, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import myResume from "../assets/myResume.png"


const styles = StyleSheet.create({
    page: {
      backgroundColor: '#FFFFFF'
    },

  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={myResume}/>
        </View>
      </Page>
    </Document>
  );

  export default MyDocument;